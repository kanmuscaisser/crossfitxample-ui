import React, { useState } from 'react'
import NotFound from './NotFound'
import { Oval } from 'react-loader-spinner'

const Display = ({ name }) => {
  const [loader, setLoader] = useState(false)
  setTimeout(() => {
    setLoader(true)
  }, 8000)

  return (
    <>
      {!loader && <Oval width={120} height={120} color='black' secondaryColor='black' ariaLabel='loading' />}
      {loader && <NotFound name={name} />}
    </>
  )
}

export default Display