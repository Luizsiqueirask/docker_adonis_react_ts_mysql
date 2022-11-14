import React, { useState } from 'react'
import Footer from '../../components/frontend/tools/Footer'
import Header from '../../components/frontend/tools/Header'
import Navbar from '../../components/frontend/tools/Navbar'
import PersonContactCard from '../../components/frontend/person/PersonContactCard'
import PersonFormUpdate from '../../components/frontend/person/update/PersonFormUpdate'

function PersonUpdate() {

  return (
    <div>
      <Navbar />
      <section className="py-5">
        <div className="container px-5">
          <React.Fragment>
            <div className="bg-light rounded-3 py-5 px-4 px-md-5 mb-5">
              <Header title="Person" action="Update" icon="person"/>
              <div className="row gx-5 justify-content-center">
                <div className="col-lg-8 col-xl-6">
                  <PersonFormUpdate />
                </div>
              </div>
            </div>
            <PersonContactCard />
          </React.Fragment>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default PersonUpdate
