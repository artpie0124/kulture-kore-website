import { jsxRenderer } from 'hono/jsx-renderer'

export const renderer = jsxRenderer(({ children }) => {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Kulture Kore - Art Holding Company. We change the world, artistically." />
        <meta name="keywords" content="art, holding company, Kulture Kore, artpie, performance, entertainment" />
        <meta property="og:title" content="Kulture Kore - Art Holding Company" />
        <meta property="og:description" content="We change the world, artistically." />
        <meta property="og:type" content="website" />
        <title>Kulture Kore - Art Holding Company</title>
        
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="/static/style.css" rel="stylesheet" />
        
        {/* Font Awesome Icons */}
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        />
      </head>
      <body>
        {children}
        
        {/* JavaScript for interactions */}
        <script src="/static/app.js"></script>
      </body>
    </html>
  )
})
