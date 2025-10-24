import React from 'react';
import { Helmet } from 'react-helmet';

interface SEOProps {
    title?: string;
    description?: string;
    keywords?: string;
    image?: string;
    url?: string;
}

export default function SEO({
    title = 'Premium Car Rental in Rwanda',
    description = 'Drive comfort and style with Rwanda\'s best car rental service. Modern fleet, clear pricing, and professional drivers in Kigali.',
    keywords = 'car rental, Rwanda, Kigali, luxury cars, SUV rental, airport transfer, chauffeur service',
    image = '/assets/images/Toyota Prado 7seats.jpg',
    url = 'https://rwandacars.com'
}: SEOProps) {
    const siteTitle = 'Rwanda Cars Rentals';
    const fullTitle = title === 'Premium Car Rental in Rwanda' ? title : `${title} | ${siteTitle}`;

    return (
        <Helmet>
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={url} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={url} />
            <meta property="twitter:title" content={fullTitle} />
            <meta property="twitter:description" content={description} />
            <meta property="twitter:image" content={image} />

            {/* Additional Meta Tags */}
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="theme-color" content="#00C896" />
            <meta name="robots" content="index, follow" />
            <link rel="canonical" href={url} />
        </Helmet>
    );
}
