import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import NotFound from './NotFound'

test('renders content', ()=> {
    const name = 'nombre error'
    const component = render(<NotFound name={name}/>)

    console.log(component)
})