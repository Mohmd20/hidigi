import React from 'react'

const Loading = () => {
    return (
        <>
            <div className='fixed top-0 left-0 w-[100vw] z-30 h-[100vh] bg-[#535353] opacity-50'></div>
            <h1 className='absolute font-extrabold text-[5vw] top-[15%] left-[50%] z-40'>loading...</h1>
        </>
    )
}

export default Loading