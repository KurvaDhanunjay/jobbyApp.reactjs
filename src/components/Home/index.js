import {Link} from 'react-router-dom'
import './index.css'
import Header from '../Header'

const Home = props => {
  const onRedirectToJobs = () => {
    const {history} = props
    history.replace('/jobs')
  }

  return (
    <>
      <Header />
      <div className="home-container">
        <h1 className="home-heading">
          Find The Job That <br />
          Fits Your Life
        </h1>
        <p className="home-paragraph">
          Millions of people are searching for jobs, salary information,company
          reviews.Find the jobs that fits your abilities and potential.
        </p>
        <Link className="retry-btn-link" to="/jobs">
          <button
            className="home-jobs-button"
            type="button"
            onClick={onRedirectToJobs}
          >
            Find Jobs
          </button>
        </Link>
      </div>
    </>
  )
}
export default Home
