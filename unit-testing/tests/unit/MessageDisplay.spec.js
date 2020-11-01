import MessageDisplay from '@/components/MessageDisplay'

import { mount } from '@vue/test-utils'
import { getMessage } from '@/services/axios'
import flushPromises from 'flush-promises'

jest.mock('@/services/axios')
beforeEach(() => {
  jest.clearAllMocks()
})
describe('MessageDisplay', () => {
  it('Calls getMessage and displays message', async () => {
    // mock api call
    const mockMessage = 'Hello from the db!'
    getMessage.mockResolvedValueOnce({ text: mockMessage })

    const wrapper = mount(MessageDisplay)
    // wait for promise to resolve
    await flushPromises()
    // check that call happend once
    expect(getMessage).toHaveBeenCalledTimes(1)
    // check that component displays message
    const message = wrapper.find('[data-testid="message"]').element.textContent
    expect(message).toEqual(mockMessage)
  })

  it('displays an error when getMessage call fails', async () => {
    const mockError = 'Oops! Something went wrong.'
    getMessage.mockRejectedValueOnce(mockError)

    const wrapper = mount(MessageDisplay)
    await flushPromises()
    expect(getMessage).toHaveBeenCalledTimes(1)
    // check that component displays error
    const message = wrapper.find('[data-testid="message-error"]').element
      .textContent
    expect(message).toEqual(mockError)
  })

  // test('If button is clicked, randomNumber should be 200 and 300', async () => {
  //   const wrapper = mount(MessageDisplay, {

  // })
})
