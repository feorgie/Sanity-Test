import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import sanityClient from "../client.js";
import BlockContent from "@sanity/block-content-to-react";
import "./SinglePost.css";

// import BlockContent from "@sanity/block-content-to-react";
// import imageUrlBuilder from "@sanity/image-url";

// const builder = imageUrlBuilder(sanityClient);
// function urlFor(source) {
//   return builder.image(source);
// }

export default function SinglePost() {
  const [postData, setPostData] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current == "${slug}"]{
          title,
          slug,
          mainImage{
            asset->{
              _id,
              url
             }
           },
         body,
         "authorName":author->name,
         "authorImage": author -> image
       }`
      )
      .then((data) => setPostData(data[0]))
      .catch(console.error);
  }, [slug]);

  if (!postData) return <div>Loading...</div>;

  return (
    <div>
      <div>
        <h2>{postData.title}</h2>
        <div>
          {/* <img
            src={urlFor(postData.authorImage).width(100).url()}
            alt="Author is Phil"
          /> */}
          <h4>{postData.authorName}</h4>
        </div>
      </div>
      <img
        className="mainImage"
        src={postData.mainImage.asset.url}
        alt={postData.title}
      />
      <div>
        <BlockContent
          blocks={postData.body}
          projectId="klr5cwo5"
          dataset="blog-data"
        />
      </div>
    </div>
  );
}
