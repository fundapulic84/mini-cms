/*
Benefits of next/Image:
* Allows for resizing, optimizing, and serving images in modern formats which avoids shipping large images to devices with a smaller viewport.
* Allows Next.js to automatically adopt future image formats and serve them to browsers that support those formats.
* Optimizes images on-demand rather than at build time, so build times aren’t increased.
* Images are lazy-loaded by default, meaning a page's speed is not affected by images outside the viewport.
* Images are rendered in a way to avoid cumulative layout shifts, which helps to improve search ranking in Google.
* Add domain name in next.config.js, if image url is external!
*/
import Image from "next/image";
import styles from "./Image.module.css";

import Link from "next/link";

import { Article } from "../interfaces";

type Props = {
  data: Article;
};

const StageItem = ({ data }: Props) => (
  <Link href="/articles/[id]" as={`/articles/${data.id}`}>
    <a>
      {data.title}
      <div className={styles.image}>
        <Image
          src={data.image}
          alt="Alt Text"
          layout="fill" /* size is unknown */
          objectFit="cover" /* image maintains its aspect ratio while filling the element’s entire content box */
        />
      </div>
    </a>
  </Link>
);

export default StageItem;
