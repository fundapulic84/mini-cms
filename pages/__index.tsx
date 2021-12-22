// if you use link instead of a href, you stay inside the SPA and have no page request & preserve state
import Link from "next/link";
//import Image from "next/image";
import { Article } from "../interfaces";

/*  
    Lazy loaded comments: Open dev tools in Chrome and inspect the network tab. You will see that 
    the code chunk for the comments component will just be be loaded dynamically, 
    if you scroll down and it is getting into the viewport.
*/
import dynamic from "next/dynamic";
import useInView from "react-cool-inview";

// load comments dynamically
const Comments = dynamic(() => import("../components/Comments"));

const DUMMY_DATA: Article[] = [
  {
    id: 1,
    title: "foo",
    image:
      "https://commons.wikimedia.org/wiki/File:HP_2133_Mini-Note_PC_(side).jpg",
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
  },
  {
    id: 2,
    title: "bar",
    image:
      "https://commons.wikimedia.org/wiki/File:Black_Holes_Having_a_Conversation.png",
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
  },
  {
    id: 3,
    title: "lorem",
    image: "https://commons.wikimedia.org/wiki/File:ESO_577-24_FORS2_VLT.jpg",
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
  },
  {
    id: 4,
    title: "ipsum",
    image:
      "https://commons.wikimedia.org/wiki/File:HP_2133_Mini-Note_PC_(side).jpg",
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
  },
];

export async function getStaticProps() {
  return {
    props: {
      article_data: DUMMY_DATA,
    },
  };
}

export default function Home() {
  /* 
        react-cool-inview uses the intersection observer technique 
        so that you can tell the comments wrapper to observe an 'in view' event
        and load content on demand
    */
  const { observe, inView } = useInView({
    onEnter: ({ unobserve }) => unobserve(),
  });

  return (
    <div className="wrapper">
      <div className="LiveTicker"></div>
      <Link href="/this-is-a-test">Test Link</Link>

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
