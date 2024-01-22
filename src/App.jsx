import { RouterProvider } from 'react-router-dom'
import routes from './routes/routes'
import UserProvider from './context/UserProvider'


function App() {

  return (
    <div>
      <UserProvider>
        <RouterProvider router={routes} />
      </UserProvider>
    </div>
  )
}

export default App
