// ======================
// WHAT THIS TEST IS FOR:
// 1- if user is not logged in - DO NOT show login button
// 2- if user is  logged in - show login button

import AppHeader from '@/components/AppHeader'

import { mount, shallowMount } from '@vue/test-utils'

describe('AppHeader', () => {
  test('If user is not logged in, do not show login button', () => {
    const wrapper = mount(AppHeader)
    expect(wrapper.find('button').isVisible()).toBe(false)
  })

  test('If user is logged in, show login button', async () => {
    const wrapper = shallowMount(AppHeader)
    wrapper.setData({ loggedIn: true }) // setting our data value

    await wrapper.vm.$nextTick()
    expect(wrapper.find('button').isVisible()).toBe(true)
  })
})
