// Write your JS code here

import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import Header from '../Header'

import './index.css'

const Home = () => {
  const jwtToken = Cookies.get('jwt_token')

  if (jwtToken === undefined) {
    return <Redirect to="/login" />
  }

  return (
    <div className="container">
      <Header />
      <div className="row h-100vh">
        <div className="col-12 col-sm-12 col-md-6 col-lg-6 d-flex align-items-center h-100vh">
          <div className="home-text-content">
            <h1 className="pb-3">
              Hello , I am Somu Ravinder{' '}
              <span className="text-success">(Frontend Developer)</span>{' '}
            </h1>
            <p className="pb-3">
              Highly accomplished and user-focused Front-end Developer adept in
              collaborating with UX and design teams to plan the technical
              writing and execution of functional specifications for websites
              and applications. Experienced in building multi-platform websites
              using Responsive Web Design/RWD.
            </p>
            <button type="button" className="btn btn-primary">
              See More
            </button>
          </div>
        </div>
        <div className="col-12 col-sm-12 col-md-6 col-lg-6">
          <div>
            <img
              className="img-fluid rounded-3 p-3"
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
              alt="home-img"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
export default Home
