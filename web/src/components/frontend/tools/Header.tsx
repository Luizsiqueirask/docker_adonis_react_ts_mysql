import { useState } from 'react'

function Header(props: any) {

  return (
    <div className="text-center mb-5">
      <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i className={"bi bi-"+`${props.icon}`}></i></div>
      <h1 className="fw-bolder">{props.title} {props.action}</h1>
      <p className="lead fw-normal text-muted mb-0">We'd love to hear from you</p>
    </div>
  )
}

export default Header
