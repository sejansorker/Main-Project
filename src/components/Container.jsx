import React from 'react'

const Container = ({children}) => {
  return (
    <div className={`max-w-[1280px] m-auto px-2`}>{children}</div>
  )
}

export default Container