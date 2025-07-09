import { Routes, Route } from 'react-router'
import { Home } from './pages/home'
import { Blog } from './pages/blog'
import { AppLayout } from './layouts/app-layout'
import { Gallery } from './pages/gallery'
import Contact from './pages/contact'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  )
}