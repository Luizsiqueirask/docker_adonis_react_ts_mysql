import React, { useState } from 'react'
import Footer from '../../components/frontend/tools/Footer'
import Navbar from '../../components/frontend/tools/Navbar'
import IndexFeatures from '../../components/frontend/home/IndexFeatures'
import IndexHeader from '../../components/frontend/home/IndexHeader'
import IndexNews from '../../components/frontend/home/IndexNews'
import IndexTestimonial from '../../components/frontend/home/IndexTestimonial'

function Default() {

  return (
    <div>
        <React.Fragment>
            <main className="flex-shrink-0">
              <Navbar />
              <IndexHeader />
              <IndexFeatures />    
              <IndexTestimonial />
              <IndexNews />
            </main>
                <Footer />
        </React.Fragment>
    </div>
  )
}

export default Default
