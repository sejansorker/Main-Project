import React from 'react'

const Container = ({children}) => {
  return (
    <div className={`max-w-[1480px] m-auto px-2`}>{children}</div>
  )
}

export default Container