import React from 'react'
import PropTypes from 'prop-types'
import Layout from '../components/layout'
import SEO from '../components/seo'
import TeamCard from '../components/TeamCard'
import TeamParallax from '../components/TeamParallax'
import { graphql } from 'gatsby'

const Team = ({ data }) => {
    const team = data.allNodeTeamMember.nodes;
    return (
        <Layout>
            <SEO title="Team Members" />
            <TeamParallax height="60vh" />
              <div className="team">
            {
                team.map(member => (
                    <TeamCard
                        path={member.path.alias}
                        key={member.id}
                        name={member.title}
                        position={member.field_position}
                        number={member.field_phone_number}
                        image={member.relationships.field_media_image.relationships.field_media_image.localFile.childImageSharp.fixed}
                        alt={member.relationships.field_media_image.field_media_image.alt}
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
    allNodeTeamMember(sort: {fields: created, order: ASC}) {
      nodes {
        id
        title
        relationships {
          field_media_image {
            field_media_image {
              alt
            }
            relationships {
              field_media_image {
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
        field_position
        field_phone_number
        path {
          alias
        }
      }
    }
  }
`

export default Team