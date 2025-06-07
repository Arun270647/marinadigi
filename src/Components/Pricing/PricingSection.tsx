import React from 'react';
import PricingBox from './PricingBox';

const PricingSection: React.FC = () => {
    const pricingData = [
        {
            title: 'Basic Plan - Starter',
            price: 999,
            description: 'Small businesses or startups looking to establish their online presence.',
            services: [
                'Keyword Research',
                'One Page Optimization',
                'Basic Analytics Reporting'
            ]
        },
        {
            title: 'Standard Plan - Growth',
            price: 1999,
            description: 'Small businesses or startups looking to establish their online presence.',
            services: [
                'Keyword Research',
                'One Page Optimization',
                'Basic Analytics Reporting'
            ]
        },
        {
            title: 'Premium Plan - Pro',
            price: 2999,
            description: 'Small businesses or startups looking to establish their online presence.',
            services: [
                'Keyword Research',
                'One Page Optimization',
                'Basic Analytics Reporting'
            ]
        }
    ];

    return (
        <div className="pricing-inner-section-area sp2">
            <div className="container">
                <div className="row">
                    {pricingData.map((pricing, index) => (
                        <div className="col-lg-4 col-md-6" key={index}>
                            <PricingBox
                                title={pricing.title}
                                price={pricing.price}
                                description={pricing.description}
                                services={pricing.services}
                                
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PricingSection;