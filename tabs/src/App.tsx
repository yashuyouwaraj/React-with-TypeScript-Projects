
import Sidebar from './components/Sidebar'
import Profile from './components/Profile'
import Tabs from './components/Tabs'

const App = () => {
  return (
    <div className='w-[1690px]'>
      <Sidebar />
      <Profile />
      <Tabs />
    </div>
  )
}

export default App