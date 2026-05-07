import UserContext from '../context/UserContext'
import NestedChild from './NestedChild'

function ContextDemo() {
  const userData = {
    name: 'Anubhab Bhattacharjee',
    role: 'Full Stack Developer',
    college: 'K.R.Mangalam University',
  }

  return (
    <UserContext.Provider value={userData}>
      <div className="card">
        <NestedChild />
      </div>
    </UserContext.Provider>
  )
}

export default ContextDemo
