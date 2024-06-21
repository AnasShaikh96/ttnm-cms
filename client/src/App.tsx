import { Route, Routes, useLocation } from 'react-router-dom';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Dashboard from './pages/dashboard/Dashboard';
import Posts from './pages/posts/Posts';
import NewPost from './pages/posts/NewPost';
import Layout from './components/layout/Layout';
import Drafts from './pages/drafts/Drafts';

import "preline/preline";
import { IStaticMethods } from "preline/preline";
import { useEffect } from 'react';
declare global {
  interface Window {
    HSStaticMethods: IStaticMethods;
  }
}


function App() {
  const location = useLocation();

  useEffect(() => {
    window.HSStaticMethods.autoInit();
  }, [location.pathname]);

  return (
    <>
      <main className='bg-gray-50 h-full overflow-hidden'>
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
