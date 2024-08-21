import { useContext, useEffect } from 'react'
import useRouteElements from './useRouteElements'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { LocalStorageEvent } from './utils/auth'
import { AppContext } from './contexts/app.context'

function App() {
  const routeElements = useRouteElements()
  const { reset } = useContext(AppContext)

  useEffect(() => {
    LocalStorageEvent.addEventListener('clearLS', reset)
    return () => {
      LocalStorageEvent.removeEventListener('clearLS', reset)
    }
  }, [reset])

  return (
    <div>
      {routeElements}
      <ToastContainer />
    </div>
  )
}

export default App
