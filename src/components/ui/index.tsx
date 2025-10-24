import React from 'react'

type PropsWithChildren<T = {}> = React.PropsWithChildren<T>

export const Card = ({ children, className = '' }: PropsWithChildren<{ className?: string }>) => (
    <div className={`bg-white rounded-2xl p-6 ${className} card-hover`}>{children}</div>
)

export const Button = ({ children, variant = 'primary', className = '', ...rest }: any) => {
    const base = 'inline-flex items-center gap-2 rounded-xl px-4 py-2 font-medium shadow-sm'
    const variants: Record<string, string> = {
        primary: `${base} btn-primary`,
        outline: `${base} btn-ghost border`,
        ghost: `${base} bg-transparent`
    }
    return (
        <button className={`${variants[variant] ?? variants.primary} ${className}`} {...rest}>
            {children}
        </button>
    )
}

export const Input = (props: any) => (
    <input
        className="w-full rounded-xl border border-gray-200 px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-[var(--primary)]"
        {...props}
    />
)

export const Textarea = (props: any) => (
    <textarea
        className="w-full rounded-xl border border-gray-200 px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-[var(--primary)]"
        {...props}
    />
)

export const Modal = ({ open, onClose, children }: any) => {
    if (!open) return null
    return (
        <div onClick={onClose} className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
            <div onClick={(e: React.MouseEvent) => e.stopPropagation()} className="bg-white rounded-2xl p-6 w-full max-w-lg">{children}</div>
        </div>
    )
}

export default { Card, Button, Input, Textarea, Modal }
