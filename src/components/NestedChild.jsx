import { useContext } from 'react'
import UserContext from '../context/UserContext'

function NestedChild() {
  const user = useContext(UserContext)

  return (
    <div>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Role:</strong> {user.role}</p>
      <p><strong>College:</strong> {user.college}</p>
    </div>
  )
}

export default NestedChild
