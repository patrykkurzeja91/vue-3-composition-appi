import MessageContainer from '@/components/MessageContainer'
import { shallowMount } from '@vue/test-utils'

describe('MessageContainer', () => {
  it('Wraps MessageDispla component', () => {
    const wrapper = shallowMount(MessageContainer, {
      stubs: {
        MessageDisplay: '<p data-testid="message">Hello from the db!</p>'
      }
    })

    const message = wrapper.find('[data-testid="message"]').element.textContent
    expect(message).toEqual('Hello from the db!')
  })
})
