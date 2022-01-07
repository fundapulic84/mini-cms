import { ArticleType } from "../interfaces";
import Image from "next/image";

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

const Comments = dynamic(() => import("./Comments"));

type ArticlePageProps = {
  item: ArticleType;
};

function ArticlePage({ item: article }: ArticlePageProps) {
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

export default ArticlePage;
