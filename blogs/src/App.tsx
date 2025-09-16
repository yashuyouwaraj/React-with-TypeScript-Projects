
import Navigation from './components/Navigation'
import PeopleToFollow from './components/PeopleToFollow'

const App = () => {
  return (
    <div>
      <Navigation />
      <div className='flex justify-center'>
        {/* main area */}
        <div className='w-[30%]'>
          <PeopleToFollow />
        </div>
      </div>
    </div>
  )
}

export default App