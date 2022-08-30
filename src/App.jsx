import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigator from './components/Navigator';
import HomeView from './views/HomeView.';
import PostsView from './views/PostsView'
import SinglePostView from './views/SinglePostView';


const App = () => {
  return (
    <BrowserRouter>
      <Navigator />
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route>
          <Route path="/posts" element={<PostsView />} />
          <Route path="/posts/:id" element={<SinglePostView />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
export default App