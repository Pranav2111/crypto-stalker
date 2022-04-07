import React from 'react'
import './css/about.css'
import a from './css/a.png'
import b from './css/b.png'
import c from './css/c.png'

const About = () => {
  return (
    <div className='conatiner'>
      <div className='card_container'>
        <div className="card" >
          <img src={a} className="card-img-top" alt="..." />
          <div className="card-body">
            <h2 className='heading'>Pirate A</h2>
            <span className='text-dark'>CEO</span>
            <div className='list' >
              <ul className="socials">
                <li><i className="fa fa-facebook"></i></li>
                <li><i className="fa fa-twitter"></i></li>
                <li><i className="fa fa-google-plus"></i></li>
                <li><i className="fa fa-youtube" ></i></li>
                <li><i className="fa fa-linkedin-square"> </i></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="card">
          <img src={b} className="card-img-top" alt="..." />
          <div className="card-body">
            <h2 className='heading'>Pirate B</h2>
            <span className='text-dark'>CO-CEO</span>
            <div className='list' >
              <ul className="socials">
                <li><i className="fa fa-facebook"></i></li>
                <li><i className="fa fa-twitter"></i></li>
                <li><i className="fa fa-google-plus"></i></li>
                <li><i className="fa fa-youtube" ></i></li>
                <li><i className="fa fa-linkedin-square"> </i></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="card" >
          <img src={c} className="card-img-top" alt="..." />
          <div className="card-body">
            <h2 className='heading'>Pirate C</h2>
            <span className='text-dark'>CO-CEO</span>
            <div className='list' >
              <ul className="socials">
                <li><i className="fa fa-facebook"></i></li>
                <li><i className="fa fa-twitter"></i></li>
                <li><i className="fa fa-google-plus"></i></li>
                <li><i className="fa fa-youtube" ></i></li>
                <li><i className="fa fa-linkedin-square"> </i></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About