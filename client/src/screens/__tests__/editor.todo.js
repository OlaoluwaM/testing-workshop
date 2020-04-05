import React from 'react'
import * as utilsMock from '../../utils/api'
import ReactDOM from 'react-dom'
import Editor from '../editor.todo'

jest.mock('../../utils/api', () => ({
  posts: {
    create: jest.fn(() => Promise.resolve()),
  },
}))

const flushPromises = () => {
  return new Promise((res) => {
    setTimeout(res, 0)
  })
}

test('calls onSubmit with the username and password when submitted', async () => {
  // Arrange
  const container = document.createElement('div')

  // create a fake user, post, history, and api
  const fakeUser = {id: 'testUser'}
  const fakeHistory = {
    push: jest.fn(),
  }

  // use ReactDOM.render() to render the editor to a div
  ReactDOM.render(<Editor user={fakeUser} history={fakeHistory} />, container)

  // fill out form elements with your fake post
  const form = container.querySelector('form')
  const {title, content, tags} = form.elements
  title.value = 'I like twix'
  content.value = 'Like alot'
  tags.value = 'twix,    my,    likes'
  const submit = new window.Event('submit')

  // Act
  // submit form
  form.dispatchEvent(submit)

  // wait for promise to settle
  await flushPromises()

  // Assert
  // ensure the create function was called with the right data
  expect(fakeHistory.push).toBeCalled()
  expect(fakeHistory.push).toBeCalledWith('/')
  // expect(utilsMock.posts.create).toBeCalled()
  expect(utilsMock.posts.create).toBeCalledWith({
    authorId: fakeUser.id,
    title: title.value,
    content: content.value,
    tags: ['twix', 'my', 'likes'],
    date: expect.any(String),
  })
})

// TODO later...
test('snapshot', () => {})
