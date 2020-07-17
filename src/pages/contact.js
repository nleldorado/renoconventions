import React from 'react';
import Layout from '../components/layout'
import SEO from '../components/seo'
import ContactParallax from '../components/ContactParallax'

const contact = () => {
    return (
        <div>
            <Layout>
                <SEO title="Contact" />
                <ContactParallax height="60vh" imgHeight="100vh" /> 
            </Layout>
        </div>
    );
};

export default contact;