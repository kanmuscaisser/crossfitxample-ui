import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import NotFound from './NotFound'

test('renders content', ()=> {
    const name = '404'
    const component = render(<NotFound name={name}/>)
    component.getByText(name + ' not Found')
})