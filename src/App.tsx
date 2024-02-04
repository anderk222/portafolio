import 'semantic-ui-css/semantic.min.css'
import { RouterProvider } from 'react-router-dom'
import router from './router'
import { RequestSnack } from './shared/RequestSnack'
import { AuthProvider } from './context/AuthProvider'

function App() {

  return (
    <AuthProvider>
      <>
        <RequestSnack />
        <RouterProvider router={router} />
      </>
    </AuthProvider>
  )
}

export default App
