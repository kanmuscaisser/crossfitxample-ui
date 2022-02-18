import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import Footer from './Footer'
import wappLogo from '../../resources/img/whatsapp.png'


test('renders p conten', ()=> {
    const contactTitle = 'CONTACT US!'
    const component = render(<Footer/>)
    const p = component.getByText(contactTitle)
    expect(p).toBeDefined()   
})


test('renders img content', ()=> {
    const localHost = 'http://localhost/'
    const component = render(<Footer/>)
    const  img = component.container.querySelectorAll('img')
    expect(img[0].src).toBe(localHost + wappLogo)
})