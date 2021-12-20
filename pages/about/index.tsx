// This page can can be pre-rendered without
// external data: It will be pre-rendered
// into a HTML file at build time.
export default function About() {
    return <div>
      <h1>About Us Page: Static Generation without Data</h1>
      {/* ... */}
      <p>
      If a page does not require fetching external data, it will automatically pre-render into HTML at build time. This is the default for Next.js pages. 
      With React, the default is a client-side rendering. Loading the page fully could take longer or ther could be some flickering. Moreover ther is much less SEO information available in the source code.
      You dont't need Next.js for server-side rendering in React, but it makes it much easier.
      </p>
    </div>
  }