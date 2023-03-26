import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
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

        <button type="button" className="btn btn-primary">
          Log out
        </button>
      </ul>
    </div>
  </div>
)
export default Header
