import { Routes, Route } from 'react-router-dom'
import { Home } from '../pages/Home/Home'
import { Layout } from '../pages/Layout'
import { Post } from '../pages/Post'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/Post/:id" element={<Post />} />
      </Route>
    </Routes>
  )
}
