
import { RouterProvider } from 'react-router-dom';

// import { useQueryClient } from '@tanstack/react-query';
import { useMemo } from 'react';
import { createRouter } from './routes/index.tsx';


const AppRouter = () => {

  // const queryClient = useQueryClient();

  const router = useMemo(() => createRouter(), [
    // queryClient
  ])


  return <RouterProvider router={router} />
}


function App() {

  return (
    <>
   <AppRouter />
    </>
  )
}

export default App
