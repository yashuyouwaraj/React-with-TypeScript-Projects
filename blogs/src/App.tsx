
import Navigation from './components/Navigation'
import PeopleToFollow from './components/PeopleToFollow'
import TopicList from './components/TopicList'
import TrendsList from './components/TrendsList'

const App = () => {
  return (
    <div>
      <Navigation />
      <div className='flex justify-center'>
        {/* main area */}
        <div className='w-[30%]'>
          <PeopleToFollow />
          <TrendsList />
          <TopicList />
        </div>
      </div>
    </div>
  )
}

export default App