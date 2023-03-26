// Write your JS code here
import {Component} from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

import './index.css'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
  }

  onSubmitSuccess = () => {
    const {history} = this.props
    history.replace('/')
  }

  onChangeUsername = e => {
    this.setState({username: e.target.value})
  }

  onChangePassword = e => {
    this.setState({password: e.target.value})
  }

  submitFrom = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDeatils = {username, password}

    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDeatils),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)
    console.log(response)
    if (response.ok === true) {
      this.onSubmitSuccess()
    }
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-7 d-flex justify-content-md-center align-items-center vh-100">
            <div>
              <img
                className="img-fluid mb-3"
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
                alt="login-img"
              />
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-5 col-lg-4 d-flex  justify-content-md-center align-items-center vh-100 ">
            <div
              className="bg-light shadow p-5 mb-5 bg-body rounded-4"
              style={{width: '100%'}}
            >
              <div className="d-flex justify-content-center mb-3">
                <img
                  className="website-logo"
                  src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
                  alt="loginImage"
                />
              </div>
              <Form onSubmit={this.submitFrom}>
                <Form.Group className="" controlId="formBasicEmail">
                  <Form.Label className="text-dark">Username</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter username"
                    onChange={this.onChangeUsername}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label className="text-dark">Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    onChange={this.onChangePassword}
                  />
                </Form.Group>

                <Button variant="primary" style={{width: '100%'}} type="submit">
                  Login
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default LoginForm
