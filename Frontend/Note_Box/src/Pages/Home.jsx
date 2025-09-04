import React from 'react'
import Navbar from '../components/Navbar'
import Hero_Frame from '../components/Hero_Frame'
import LatestCollections from '../components/LatestCollection'

const Home = () => {
  return (
    <div>
        <Navbar />
        <Hero_Frame />
        <LatestCollections />
    </div>
  )
}

export default Home