// Write your JS code here

import {Component} from 'react'

import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import './index.css'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    showErrorMsg: false,
    errorMsg: '',
  }

  onSubmitSuccess = jwtToken => {
    Cookies.set('jwt_token', jwtToken, {expires: 30})

    const {history} = this.props
    history.replace('/')
  }

  onsubmitFailure = errorMsg => {
    this.setState({
      showErrorMsg: true,
      errorMsg,
    })
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
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onsubmitFailure(data.error_msg)
    }
  }

  render() {
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    const {showErrorMsg, errorMsg} = this.state
    return (
      <div className="container" style={{height: '100vh', display: 'flex'}}>
        <div className="row">
          <div className="col-12 col-sm-12 col-md-7 d-flex justify-content-md-center align-items-center">
            <div>
              <img
                className="img-fluid mb-3"
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
                alt="login-img"
              />
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-5 col-lg-4 d-flex  justify-content-md-center align-items-center">
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
                {showErrorMsg && <p className="text-danger">*{errorMsg}</p>}
              </Form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default LoginForm
