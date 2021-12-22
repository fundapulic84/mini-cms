import { Article } from "../interfaces";
import Image from "next/image";
/*
Benefits of next/Image:
* Allows for resizing, optimizing, and serving images in modern formats which avoids shipping large images to devices with a smaller viewport.
* Allows Next.js to automatically adopt future image formats and serve them to browsers that support those formats.
* Optimizes images on-demand rather than at build time, so build times aren’t increased.
* Images are lazy-loaded by default, meaning a page's speed is not affected by images outside the viewport.
* Images are rendered in a way to avoid cumulative layout shifts, which helps to improve search ranking in Google.
* Add domain name in next.config.js, if image url is external!
*/

/* 
  if you use link instead of a href, you stay inside the SPA and have no page request & preserve state
*/
import Link from "next/link";

/*  
  Lazy loaded comments: Open dev tools in Chrome and inspect the network tab. You will see that 
  the code chunk for the comments component will just be be loaded dynamically, 
  if you scroll down and it is getting into the viewport.
*/
import dynamic from "next/dynamic";
import useInView from "react-cool-inview";

import styles from "./Image.module.css";

const Comments = dynamic(() => import("../components/Comments"));

type ListDetailProps = {
  item: Article;
};

function ListDetail({ item: article }: ListDetailProps) {
  /* 
  react-cool-inview uses the intersection observer technique 
  so that you can tell the comments wrapper to observe an 'in view' event
  and load content on demand
*/
  const { observe, inView } = useInView({
    onEnter: ({ unobserve }) => unobserve(),
  });

  return (
    <div>
      <h1>{article.title}</h1>
      <div className={styles.image}>
        <Image
          src={article.image}
          alt="Alt Text"
          layout="fill" /* size is unknown */
          objectFit="cover" /* image maintains its aspect ratio while filling the element’s entire content box */
        />
      </div>
      <p>{article.text}</p>

      <p>Scroll Down</p>
      <p>Scroll Down</p>
      <p>Scroll Down</p>
      <p>Scroll Down</p>
      <p>Scroll Down</p>
      <p>Scroll Down</p>
      <p>Scroll Down</p>
      <p>Scroll Down</p>
      <p>Scroll Down</p>
      <p>Scroll Down</p>
      <p>Scroll Down</p>
      <p>Scroll Down</p>
      <p>Scroll Down</p>
      <p>Scroll Down</p>
      <p>Scroll Down</p>
      <p>Scroll Down</p>
      <p>Scroll Down</p>
      <p>Scroll Down</p>
      <p>Scroll Down</p>
      <p>Scroll Down</p>
      <p>Scroll Down</p>
      <p>Scroll Down</p>
      <p>Scroll Down</p>
      <p>Scroll Down</p>
      <p>Scroll Down</p>
      <p>Scroll Down</p>
      <p>Scroll Down</p>
      <p>Scroll Down</p>
      <p>Scroll Down</p>
      <p>Scroll Down</p>
      <p>Scroll Down</p>
      <p>Scroll Down</p>
      <p>Scroll Down</p>
      <p>Scroll Down</p>
      <p>Scroll Down</p>
      <p>Scroll Down</p>
      <p>Scroll Down</p>
      <p>Scroll Down</p>
      <p>Scroll Down</p>
      <p>Scroll Down</p>
      <p>Scroll Down</p>
      <p>Scroll Down</p>
      <p>Scroll Down</p>
      <p>Scroll Down</p>
      <p>Scroll Down</p>
      <p>Scroll Down</p>
      <p>Scroll Down</p>
      <p>Scroll Down</p>
      <p>Scroll Down</p>
      <p>Scroll Down</p>
      <p>Scroll Down</p>
      <p>Scroll Down</p>
      <p>Scroll Down</p>
      <p>Scroll Down</p>
      <p>Scroll Down</p>
      <p>Scroll Down</p>

      <div className="comments-wrapper" ref={observe}>
        <h2>Comments</h2>
        {/* comments go here*/}
        {inView && <Comments />}
      </div>
    </div>
  );
}

export default ListDetail;
