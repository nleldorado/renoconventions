import React from 'react'
import PropTypes from 'prop-types'
import {graphql} from 'gatsby'
import Layout from '../components/Layout'
import SEO from '../components/seo'
import TeamCard from '../components/TeamCard'
import Image from '../images/professional.jpg'
import Parallaxx from '../components/Parallaxx'

const Team = ({ data }) => {
    const team = data.allNodeTeamMember.nodes;

    return (
        <Layout>
            <SEO title="Team Members" />
            <Parallaxx 
                  text={'Meet The Team'}
                  image={Image}
                  url={'/team'}
                  height={'60vh'}
              />
              <div className="team">
            {
                team.map(member => (
                    <TeamCard
                        path={member.path.alias}
                        key={member.id}
                        name={member.title}
                        position={member.field_position}
                        number={member.field_phone_number}
                        image={member.relationships.field_media_image.relationships.field_media_image.localFile.publicURL}
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
                  publicURL
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