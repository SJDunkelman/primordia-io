import React from "react";
import {graphql, Link, useStaticQuery} from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const MemesPage = () => {
    const memeData = useStaticQuery(graphql `
      query MemeImages {
          data: allFile(filter: {sourceInstanceName: {eq: "content"}}) {
            edges {
              node {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
          }
        }
    `)

    const allMemes = memeData.data.edges;
    console.log(allMemes);

    return (
        <section className="relative w-full h-full  py-12">
            <div className="absolute bg-night-sky top-0 left-0 w-screen z-0 text-white py-12  text-center">
                <h1 className="text-5xl">Memes</h1>
                <p className="pt-4">Click on any to open up the full image.</p>
                <div className="w-3/4 flex flex-wrap mx-auto py-8 justify-center">
                    {allMemes.map(meme => (
                        <div className="flex items-start">
                            <a href={meme.node.childImageSharp.gatsbyImageData.images.fallback.src} target="_blank">
                                <GatsbyImage alt="meme" image={meme.node.childImageSharp.gatsbyImageData} loading="lazy" className="w-80 m-2" />
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default MemesPage;