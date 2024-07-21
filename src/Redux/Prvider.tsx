
import React, {ReactNode} from 'react'
import { Provider } from 'react-redux'
import store from './Store'
type PrvderProps = {
    children: ReactNode;
    
}

const Prvider = ({children}:PrvderProps) => {
  return (
    <div>
        <Provider store={store}>
          {children}
        </Provider>
    </div>
  )
}

export default Prvider