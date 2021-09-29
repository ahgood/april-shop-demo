import React from 'react'
import {StaticQuery, graphql} from 'gatsby'
import RecommendProducts from '../RecommendProducts'

export default function RecommendProductsShare() {
  return (
    <StaticQuery
      query={graphql`
        query RecommendProductsShareQuery {
          allMoltinProduct {
            edges {
              node {
                id
                name
                description
                meta {
                  display_price {
                    with_tax {
                      amount
                      currency
                      formatted
                    }
                  }
                }
                mainImageHref
                mainImage {
                  childImageSharp {
                    sizes(maxWidth: 400) {
                      ...GatsbyImageSharpSizes
                    }
                  }
                }
                slug
                material
                max_watt
                bulb_qty
                bulb
                sku
                finish
              }
            }
          }
        }
      `}
      render={data => {
        const filterProductsWithoutImages = data.allMoltinProduct.edges
          .filter(v => v.node.mainImageHref)
          .slice(0, 4)
        console.log(filterProductsWithoutImages)
        return (
          <>
            <h2>Recommend Products</h2>
            <RecommendProducts products={filterProductsWithoutImages} />
          </>
        )
      }}
    />
  )
}
