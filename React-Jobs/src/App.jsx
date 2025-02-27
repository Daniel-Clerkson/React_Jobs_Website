import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import Homepage from './pages/HomePage'
import MainLayout from './layout/Main'
import JobsPage from './layout/Jobs'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
      <Route index element={<Homepage />} />  
      <Route path='/jobs' element={<JobsPage />} />  
    </Route >
  )
);


const App = () => {
  return <RouterProvider router={router} />
}

export default App