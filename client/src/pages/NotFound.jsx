import React from 'react'
import notFound from '../assets/404-error-cuate.png'
function NotFound() {
  return (
    <>
    <div className="max-h-screen flex justify-center items-center ">
        <img src={notFound} className='w-1/2 '/>
    </div>
    </>
  )
}

export default NotFound