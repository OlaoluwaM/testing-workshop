import React from 'react'
import {render, Simulate} from 'react-testing-library'
import Login from '../login'

// Basic unit test
test('calls onSubmit with the username and password when submitted', () => {
  // Arrange
  const fakeSubmit = jest.fn()
  const {container, getByLabelText} = render(<Login onSubmit={fakeSubmit} />)

  const form = container.querySelector('form')
  const {username, password} = {
    username: getByLabelText('username'),
    password: getByLabelText(password),
  }
  username.value = 'Test User'
  password.value = 'Test Password'

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
  Simulate.submit(form)
  // TIP: formNode.dispatchEvent(new window.Event('submit'))
  //
  // Assert
  expect(fakeSubmit).toHaveBeenCalledTimes(1)
  expect(fakeSubmit).toHaveBeenCalledWith({
    username: username.value,
    password: password.value,
  })
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
