import React from 'react';
import Layout from '../components/layout'
import SEO from '../components/seo'
import Parallaxx from '../components/Parallaxx'

const contact = () => {
    return (
        <div>
            <Layout>
                <SEO title="Contact" />
                <Parallaxx 
                  text={'Contact Us'}
                  image="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                  url={'/restaurants'}
                  height={'60vh'}
              /> 
            </Layout>
        </div>
    );
};

export default contact;