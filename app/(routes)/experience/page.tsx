import Footer from '@/components/footer'
import Hero from '@/components/hero'
import Navbar from '@/components/navbar'
import React from 'react'
import Explore from './components/explore'
import Testimonials from '@/components/testimonials'
import Experience from './components/experience'

const page = () => {
  return (
    <div>
        <Navbar />
        <Hero images={["/experience.avif"]} />
        <Explore />
        <Experience />
        <Testimonials />
        <Footer />
    </div>
  )
}

export default page
