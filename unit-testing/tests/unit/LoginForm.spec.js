import LoginForm from '@/components/LoginForm'
import { mount } from '@vue/test-utils'

describe('LoginForm', () => {
  it('emits an event with a user data payload', () => {
    const wrapper = mount(LoginForm)
    // 1. Find text input
    const input = wrapper.find('[data-testid="name-input"]')
    // 2. Set value for text input
    input.setValue('Adam Jahr')
    // 3. Simulate form submission

    // this approach is wrong XXX because user can submit by eg KEYUP
    // const button = wrapper.find('[data-testid="submit-button"]')
    // button.trigger('click')

    wrapper.trigger('submit')

    // 4. Assert event has been emitted
    const formSubmittedCalls = wrapper.emitted('formSubmitted')
    // 5. Assert payload is correct
    expect(formSubmittedCalls).toHaveLength(1)

    const expectedPayload = { name: 'Adam Jahr' }
    expect(formSubmittedCalls[0][0]).toMatchObject(expectedPayload)
  })
})
