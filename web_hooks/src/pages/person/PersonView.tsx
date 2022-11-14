import React from 'react'
import Footer from '../../components/frontend/tools/Footer'
import Header from '../../components/frontend/tools/Header'
import Navbar from '../../components/frontend/tools/Navbar'
import PersonContactCard from '../../components/frontend/person/PersonContactCard'
import PersonFormList from '../../components/frontend/person/view/PersonFormList'

function PersonView() {

  return (
    <div>
      <Navbar />
      <section className="py-5">
        <div className="container px-5">
          <React.Fragment>
            <div className="bg-light rounded-3 py-5 px-4 px-md-5 mb-5">
              <Header title="Person" action="List" icon="person"/>
              <div className="row gx-5 justify-content-center">
                <div className="col-lg-8 col-xl-6">
                  <PersonFormList />
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

export default PersonView
