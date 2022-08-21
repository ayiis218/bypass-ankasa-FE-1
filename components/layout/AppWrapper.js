import { useDispatch, useSelector } from "react-redux"
import jwtDecode from "jwt-decode"
import { getUser, removeUser } from "../../redux/features/loggedInUser"
import { useEffect } from "react"

const AppWrapper = ({ children }) => {
  const dispatch = useDispatch()
  const authState = useSelector(state => state.auth)
  const { token } = authState

  useEffect(()=>{
    if (token) {
      const decoded = jwtDecode(token)
      const userId = decoded?.userId
  
      dispatch(getUser(userId))
    } else {
      dispatch(removeUser())
    }
  }, [token, dispatch])

  return (
    <>
      {children}
    </>
  )
}

export default AppWrapper
