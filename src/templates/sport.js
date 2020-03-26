import React from 'react';
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

const Sport = ({data}) => {
    const post = data.nodeSport;

    return (
        <div>
            <Layout>
                <h1>{post.title}</h1>
                <img 
                    src={post.relationships.field_media_image.relationships.field_media_image.localFile.publicURL} 
                    alt= {post.relationships.field_media_image.field_media_image.alt} />
               <div dangerouslySetInnerHTML={{ __html: post.body.processed}} />
            </Layout>
        </div>
    );
};

Sport.propTypes = {
    data: PropTypes.object.isRequired,
}

export const query = graphql`
    query($SportId: String!) {
        nodeSport(id: {eq: $SportId}) {
            id
            title
            body {
                processed
            }
            relationships {
                field_media_image {
                    field_media_image {
                        alt
                    }
                    relationships {
                        field_media_image {
                            localFile {
                                publicURL
                            }
                        }
                    }
                }
            }
        }
    }
`;

export default Sport;