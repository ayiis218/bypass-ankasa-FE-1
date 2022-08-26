import { store, persistor } from '../redux/app/store'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

const withRedux = (Component) => {
  const Wrapper = (props) => (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Component {...props}/>
      </PersistGate>
    </Provider>
  )

  return Wrapper
}

export default withRedux