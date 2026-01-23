import { Hono } from 'hono'
import { renderer } from './renderer'
import { HomePage } from './pages/home'
import { BrandsPage } from './pages/brands'
import { ContactPage } from './pages/contact'

const app = new Hono()

app.use(renderer)

app.get('/', (c) => {
  return c.render(<HomePage />)
})

app.get('/brands', (c) => {
  return c.render(<BrandsPage />)
})

app.get('/contact', (c) => {
  return c.render(<ContactPage />)
})

// API endpoint for contact form (for future integration)
app.post('/api/contact', async (c) => {
  try {
    const body = await c.req.json()
    // Here you would typically send email or store in database
    return c.json({ success: true, message: 'Message received!' })
  } catch (error) {
    return c.json({ success: false, message: 'Error processing request' }, 500)
  }
})

export default app
