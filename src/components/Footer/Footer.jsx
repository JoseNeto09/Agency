import React from 'react'
import './footer.css'

const quickLinks01 = [
    {
        path:'#',
        display:'Marketing'
    },
    {
        path:'#',
        display:'Analytics'
    },
    {
        path:'#',
        display:'Commerce'
    },
]
const quickLinks02 = [
    {
        path:'#',
        display:'Pricing'
    },
    {
        path:'#',
        display:'Documentation'
    },
    {
        path:'#',
        display:'Guides'
    },
]
const quickLinks03 = [
    {
        path:'#about',
        display:'About'
    },
    {
        path:'#',
        display:'Jobs'
    },
    {
        path:'#blog',
        display:'Blog'
    },
]

const Footer = () => {

    const year = new Date().getFullYear()
  return (
    <footer className="footer">
        <div className="container">
            <div className="footer__wrapper">
                <div className="footer__logo">
                    <h2>Agency</h2>
                    <p className="description">Grow with us</p>

                    <p className="small__text description">Lorem ipsum dolor sit amet
                     consectetur adipisicing elit. Exercitationem sunt, perspiciatis modi
                      aut reiciendis quisquam aperiam necessitatibus vel veniam dolor!</p>
                </div>
                <div className="footer__quick-links">
                    <h3 className="quick__link-title">Solutions</h3>
                    <ul className="quick__links">
                        {
                            quickLinks01.map((item, index)=>(
                                <li className="quick__link-item" key={index}><a href=
                                {item.path}>{item.display}</a></li>
                            ))
                        }
                    </ul>
                </div>
                <div className="footer__quick-links">
                    <h3 className="quick__link-title">Supporte</h3>
                    <ul className="quick__links">
                        {
                            quickLinks02.map((item, index)=>(
                                <li className="quick__link-item" key={index}><a href=
                                {item.path}>{item.display}</a></li>
                            ))
                        }
                    </ul>
                </div>

                <div className="footer__quick-links">
                    <h3 className="quick__link-title">Company</h3>
                    <ul className="quick__links">
                        {
                            quickLinks03.map((item, index)=>(
                                <li className="quick__link-item" key={index}><a href=
                                {item.path}>{item.display}</a></li>
                            ))
                        }
                    </ul>
                </div>
            </div>

            <p className="copyright"> Copyright {year}, Developed by José neto. All rights reserved. </p>
        </div>
    </footer>
  )
}

export default Footer