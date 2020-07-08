import React from 'react'
import PropTypes from 'prop-types'
import Layout from '../components/layout'
import SEO from '../components/seo'
import TeamCard from '../components/TeamCard'
import TeamParallax from '../components/TeamParallax'
import { graphql } from 'gatsby'

const Team = ({ data }) => {
    const team = data.allNodeSalesContact.nodes;
    return (
        <Layout>
            <SEO title="Team Members" />
            <TeamParallax height="60vh" />
              <div className="team">
            {
                team.map(member => (
                    <TeamCard
                        key={member.id}
                        name={member.title}
                        position={member.field_job_title}
                        number={member.field_phone_number}
                        image={member.relationships.field_contact_image.localFile.childImageSharp.fixed}
                        alt={member.field_contact_image.alt}
                    />
                ))
            }
            </div>
        </Layout>
    )
}

Team.propTypes = {
    data: PropTypes.object.isRequired,
}

export const data = graphql`
  {
    allNodeSalesContact(sort: {fields: created, order: ASC}) {
      nodes {
        field_contact_image_description {
          value
        }
        field_contact_image {
          alt
        }
        id
        title
        field_job_title
        field_phone_number
        relationships {
          field_contact_image {
            localFile {
              childImageSharp {
                fixed(width: 370) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    }
  }
`

export default Team