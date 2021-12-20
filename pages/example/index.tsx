// example for reacts lazy loading with dynamic import from next on scroll down

/*  
    Lazy loaded comments: Open dev tools in Chrome and inspect the network tab. You will see that 
    the code chunk for the comments component will just be be loaded dynamically, 
    if you scroll down and it is very close to the viewport.


*/

import dynamic from "next/dynamic";
import useInView from "react-cool-inview";
//import Image from "next/image";

// load comments dynamically
const Comments = dynamic(() => import("../../components/Comments"));

/*
    Fetch data for pre-rendering with static page generation:
    - server returns pre-rendered page & react hydrates code 
    => get both benefits: fast rendering and good SEO AND a SPA with up-to-date data
    - With async you have a promise here and it is guaranteed that our page (component function) will be 
      executed AFTER the getStaticProps got the comments and passes them through the props to the component)
*/
/*export async function getStaticProps() {

}*/
// props are coming from getStaticProps
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
            <div className="content">
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
        </div>
    );

}