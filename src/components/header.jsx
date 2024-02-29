import React from 'react'
import { Navbar,Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function header() {
  return (
    <Navbar className="bg-info">
    <Container>
      <Link to={'/'} style={{textDecoration:'none'}}>
        <Navbar.Brand className='fw-bolder d-flex align-items-center' style={{color:'white'}}>
        <i class="fa-solid fa-list-check me-3"></i>
        {' '}
          Media Player
        </Navbar.Brand>
      </Link>
    </Container>
  </Navbar>
  )
}

export default header