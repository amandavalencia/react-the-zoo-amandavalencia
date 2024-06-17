
import { RouterProvider } from 'react-router-dom'
import '../src/styling/App.scss'
import { router } from './Router'

function App() {

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
