import React from 'react'
import { useState } from 'react'
import Footer from '../../components/frontend/tools/Footer'
import Header from '../../components/frontend/tools/Header'
import Navbar from '../../components/frontend/tools/Navbar'
import PetContactCard from '../../components/frontend/pet/PetContactCard'
import PetFromDestroy from '../../components/frontend/pet/delete/PetFromDestroy'

function PetDelete() {

  return (
    <div>
      <Navbar />
      <section className="py-5">
        <div className="container px-5">
          <React.Fragment>
            <div className="bg-light rounded-3 py-5 px-4 px-md-5 mb-5">
              <Header title="Pet" action="Show" icon="twitter"/>
              <div className="row gx-5 justify-content-center">
                <div className="col-lg-8 col-xl-6">
                  <PetFromDestroy />
                </div>
              </div>
            </div>
            <PetContactCard />
          </React.Fragment>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default PetDelete
