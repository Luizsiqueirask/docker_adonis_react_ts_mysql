import { useState } from 'react'

function AboutTeam() {

  return (
    <section className="py-5 bg-light">
                <div className="container px-5 my-5">
                    <div className="text-center">
                        <h2 className="fw-bolder">Our team</h2>
                        <p className="lead fw-normal text-muted mb-5">Dedicated to quality and your success</p>
                    </div>
                    <div className="row gx-5 row-cols-1 row-cols-sm-2 row-cols-xl-4 justify-content-center">
                        <div className="col mb-5 mb-5 mb-xl-0">
                            <div className="text-center">
                                <img className="img-fluid rounded-circle mb-4 px-4" src="https://dummyimage.com/150x150/ced4da/6c757d" alt="..." />
                                <h5 className="fw-bolder">Ibbie Eckart</h5>
                                <div className="fst-italic text-muted">Founder &amp; CEO</div>
                            </div>
                        </div>
                        <div className="col mb-5 mb-5 mb-xl-0">
                            <div className="text-center">
                                <img className="img-fluid rounded-circle mb-4 px-4" src="https://dummyimage.com/150x150/ced4da/6c757d" alt="..." />
                                <h5 className="fw-bolder">Arden Vasek</h5>
                                <div className="fst-italic text-muted">CFO</div>
                            </div>
                        </div>
                        <div className="col mb-5 mb-5 mb-sm-0">
                            <div className="text-center">
                                <img className="img-fluid rounded-circle mb-4 px-4" src="https://dummyimage.com/150x150/ced4da/6c757d" alt="..." />
                                <h5 className="fw-bolder">Toribio Nerthus</h5>
                                <div className="fst-italic text-muted">Operations Manager</div>
                            </div>
                        </div>
                        <div className="col mb-5">
                            <div className="text-center">
                                <img className="img-fluid rounded-circle mb-4 px-4" src="https://dummyimage.com/150x150/ced4da/6c757d" alt="..." />
                                <h5 className="fw-bolder">Malvina Cilla</h5>
                                <div className="fst-italic text-muted">CTO</div>
                            </div>
                        </div>
                    </div>
                </div>
    </section>
  )
}

export default AboutTeam
