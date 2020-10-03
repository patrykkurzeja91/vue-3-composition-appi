import RandomNumber from '@/components/RandomNumber'

import { mount, shallowMount } from '@vue/test-utils'

describe('RandomNumber', () => {
  test('By default, randomNumber data value should be 0', () => {
    // const wrapper = mount(RandomNumber)
    const wrapper = mount(RandomNumber)
    expect(wrapper.html()).toContain('<span>0</span>')
  })

  test('If button is clicked random number should be between 1 and 10', async () => {
    const wrapper = shallowMount(RandomNumber)
    wrapper.find('button').trigger('click')

    await wrapper.vm.$nextTick()
    const randomNumber = parseInt(wrapper.find('span').element.textContent)
    expect(randomNumber).toBeGreaterThanOrEqual(1)
    expect(randomNumber).toBeLessThanOrEqual(10)
  })

  test('If button is clicked, randomNumber should be 200 and 300', async () => {
    const wrapper = shallowMount(RandomNumber, {
      // changed props to strings as we can
      // accidentally pass it in this component
      // and output will bee different
      propsData: {
        min: '200',
        max: '300'
      }
    })
    wrapper.find('button').trigger('click')

    await wrapper.vm.$nextTick()
    const randomNumber = parseInt(wrapper.find('span').element.textContent)
    expect(randomNumber).toBeGreaterThanOrEqual(200)
    expect(randomNumber).toBeLessThanOrEqual(300)
  })
})

// import { shallowMount } from "@vue/test-utils";
// import HelloWorld from "@/components/HelloWorld.vue";

// describe("HelloWorld.vue", () => {
//   it("renders props.msg when passed", () => {
//     const msg = "new message";
//     const wrapper = shallowMount(HelloWorld, {
//       props: { msg }
//     });
//     expect(wrapper.text()).toMatch(msg);
//   });
// });
