import { Route, Routes } from 'react-router-dom';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Dashboard from './pages/dashboard/Dashboard';
import Posts from './pages/posts/Posts';
import NewPost from './pages/posts/NewPost';
import Layout from './components/layout/Layout';
import Drafts from './pages/drafts/Drafts';

function App() {
  return (
    <>
      <main className='bg-gray-50 h-screen overflow-hidden'>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/register' element={<Register />} />

          <Route element={<Layout />} >
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/posts' element={<Posts />} />
            <Route path='/new-post' element={<NewPost />} />
            <Route path='/edit-post/:id' element={<NewPost />} />
            <Route path='/drafts' element={<Drafts />} />

          </Route>
        </Routes>
      </main>

    </>
  );
}

export default App;
