import style from '../../../styles/UI.module.css'
import { Button } from 'react-bootstrap'

const BaseButton = ({ type, disabled = false, children }) => {
  return (
    <Button type={type} disabled={disabled} className={style.baseButton}> {children} </Button>
  )
}

export default BaseButton
