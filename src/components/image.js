import Img from "gatsby-image"

const Image = () => {
  const data = useStaticQuery(graphql`
      query {
        placeholderImage: file(relativePath: {eq: "gatsby-astronaut.png" }) {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
  `)
  return <Img fluid={data.placeholderImage.childIMageSharp.fluid } />
}

export default Img
