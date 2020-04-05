import React from 'react'
import ReactDOM from 'react-dom'
import Login from '../login'

// Basic unit test
test('calls onSubmit with the username and password when submitted', () => {
  // Arrange
  const container = document.createElement('div')
  const fakeSubmit = jest.fn()
  ReactDOM.render(<Login onSubmit={fakeSubmit} />, container)

  const form = container.querySelector('form')
  const {username, password} = form.elements
  username.value = 'Test User'
  password.value = 'Test Password'

  const fakeUser = {
    username: username.value,
    password: password.value,
  }
  // create a fake object to hold the form field values (username and password)
  // create a jest.fn() for your submit handler
  // render the Login component to a div
  // TIP: const div = document.createElement('div')
  //
  // get the field nodes
  // TIP: const inputs = div.querySelectorAll('input')
  // TIP: const form = div.querySelector('form')
  // fill in the field values
  //
  // Act
  // submit the form:
  form.dispatchEvent(new window.Event('submit'))
  // TIP: formNode.dispatchEvent(new window.Event('submit'))
  //
  // Assert
  expect(fakeSubmit).toHaveBeenCalledTimes(1)
  expect(fakeSubmit).toHaveBeenCalledWith(fakeUser)
  // ensure your submit handler was called properly
})

//////// Elaboration & Feedback /////////
// When you've finished with the exercises:
// 1. Copy the URL below into your browser and fill out the form
// 2. remove the `.skip` from the test below
// 3. Change submitted from `false` to `true`
// 4. And you're all done!
/*
http://ws.kcd.im/?ws=Testing&e=login.step-1&em=
*/
test('I submitted my elaboration and feedback', () => {
  const submitted = true // change this when you've submitted!
  expect(submitted).toBe(true)
})
////////////////////////////////
