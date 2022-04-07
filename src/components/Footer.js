import React from 'react'
import './css/footer.css'

const Footer = () => {
  return (
    <footer>
        <div className="footer-content">
            <h2>Crypto-Stalker</h2>
            <p>Get the latest market data now on our website</p>
            <ul className="socials">
                <li><i className="fa fa-facebook"></i></li>
                <li><i className="fa fa-twitter"></i></li>
                <li><i className="fa fa-google-plus"></i></li>
                <li><i className="fa fa-youtube" ></i></li>
                <li><i className="fa fa-linkedin-square"> </i></li>
            </ul>
        </div>
        <div className="footer-bottom">
            <p>copyright &copy; Crypto-Stalker  </p>
                    <div className="footer-menu">
                      <ul className="f-menu">
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                        <li>Blog</li>
                      </ul>
                    </div>
        </div>

    </footer>
  )
}

export default Footer