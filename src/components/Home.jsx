import React from 'react'
import logo1 from "../assets/women.jpeg"

const Home = () => {
  return (
    <div>
       <img
                src={logo1}
                className="flex flex-col gap-4 mt-[200px]"
                alt="WTM Logo"
      />
    </div>
  )
}

export default Home