import React from 'react'

const Title = ({t1,t2}) => {
  return (
    <div className='inline-flex gap-2 items-center mb-3'>
      <p className=' text-gray-500'>{t1} <span className=' text-gray-700'>{t2}</span> </p>
        <p className='w-8 sm:w-12 bg-gray-700 h-[1px] sm:h-[2px]'></p>
    </div>
  )
}

export default Title