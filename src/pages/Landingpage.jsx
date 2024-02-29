import React from 'react'
import { Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'



function Landingpage() {

  const navigate = useNavigate()

  const handleNavigate = () => {
    // navigate to home page
    navigate('/home')
  }
  return (
    <>
      <div className='container'>
        <div className="header row align-items-center m-5">
          <div className='col-lg-5'>
            <h3>Welcome to <span className='text-warning'>Media Player</span></h3>
            <p style={{ textAlign: 'justify' }}>Media Player App. will allow you to add and remove their uploaded videos, also helps to arrange them in different categories by providing drag and drop functionalities. </p>
            <button onClick={handleNavigate} className='btn btn-info mt-3'>Get Started</button>
          </div>
          <div className='col-lg-1'></div>
          <div className='col-lg-6'>
            <img style={{ width: '500px',}} src="https://cdn.dribbble.com/users/1105177/screenshots/16426560/media/3258805f1523c16857181b92df560c75.gif" alt="Landing Image" />
          </div>
        </div>
        <div className="features">
          <h3 className='text-center'>Features</h3>
          <div className="row mt-5">
            <div className="col-lg-4">
              <Card>
                <Card.Img variant="top" src="https://miro.medium.com/v2/resize:fit:1400/1*f7cZomxEUsR2AYQVlUXZog.gif" />
                <Card.Body>
                  <Card.Title>Managing Videos</Card.Title>
                  <Card.Text>
                     User Can Upload, View And Remove The Videos
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col-lg-4">
            <Card>
                <Card.Img variant="top" src="https://cdn.dribbble.com/users/5133170/screenshots/11638413/media/b262af1fe9dd69e7a1d7ab7bb3d1efbe.gif" />
                <Card.Body>
                  <Card.Title>Catergorize Videos</Card.Title>
                  <Card.Text>
                     User can Categorise the videos according to their preferences using drag and drop features
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col-lg-4">
            <Card>
                <Card.Img variant="top" src="https://cdn.dribbble.com/users/1326465/screenshots/8457656/media/f06ff9b57394c12343cc0622c0586884.gif" />
                <Card.Body>
                  <Card.Title>Watch History</Card.Title>
                  <Card.Text>
                     User are able to see the history of watched Videos
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
        <div className="video row border p-5 mt-5 rounded mb-5 align-items-center">
          <div className="col-lg-5">
            <h3 className='text-warning'>Simple, Fast and Powerful</h3>
            <p style={{textAlign:'justify'}}><span className='fs-4'>Play Everything :</span> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, nobis blanditiis reprehenderit aperiam odit laboriosam illo necessitatibus sequi praesentium, reiciendis, a et? Harum reprehenderit reiciendis odit, dolorem ad eveniet. Unde!
            </p>
            <p style={{textAlign:'justify'}}><span className='fs-4'>Categorize Videos :</span> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, nobis blanditiis reprehenderit aperiam odit laboriosam illo necessitatibus sequi praesentium, reiciendis, a et? Harum reprehenderit reiciendis odit, dolorem ad eveniet. Unde!
            </p>
            <p style={{textAlign:'justify'}}><span className='fs-4'>Watch History :</span> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, nobis blanditiis reprehenderit aperiam odit laboriosam illo necessitatibus sequi praesentium, reiciendis, a et? Harum reprehenderit reiciendis odit, dolorem ad eveniet. Unde!
            </p>
          </div>
          <div className="col"></div>
          <div className="col-lg-6">
          <iframe style={{border:'1px', borderRadius:'10px'}} width="600" height="522" src="https://www.youtube.com/embed/55pzldrBRJM" title="Bramayugam - Trailer (Malayalam) | Mammootty | FEB 15 Release" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
        </div>
      </div>
      <hr />
    </>
  )
}

export default Landingpage