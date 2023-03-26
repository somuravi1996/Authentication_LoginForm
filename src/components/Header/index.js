import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

const Header = props => {
  const onLogoutButton = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }
  return (
    <div className="container">
      <div className="nav-container pt-4">
        <div>
          <img
            className="website-logo"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
          />
        </div>
        <ul className="nav-items">
          <Link className="nav-link" to="/">
            <li>Home</li>
          </Link>
          <Link className="nav-link" to="/">
            <li>Product</li>
          </Link>
          <Link className="nav-link" to="/">
            <li>Cart</li>
          </Link>

          <button
            type="button"
            className="btn btn-primary"
            onClick={onLogoutButton}
          >
            Log out
          </button>
        </ul>
      </div>
    </div>
  )
}
export default withRouter(Header)
