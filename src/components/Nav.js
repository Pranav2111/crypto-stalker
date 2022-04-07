import React, { useContext } from 'react'
import { Link, useLocation } from "react-router-dom";
import { Coin } from '../contextApi/ContextCryto';
import './css/navbar.css'


const Nav = () => {

    const { setCurrency ,  setSelected} = useContext(Coin);
    const location = useLocation();

    // useEffect(() => {
    //     console.log(currency );
    //     console.log(location.pathname);
    // }, [currency,location.pathname])

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" id="logo" to="/" >🕵🏻 CRYPTO-STALKER</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === "/about" ? "active" : ""}`} aria-current="page" to="/about">About</Link>
                            </li>

                        </ul>

                        <select
                            className="form-select" aria-label="Default select example"
                            onChange={(e) => {
                                setCurrency(e.target.value);
                                setSelected(e.target.value);
                            }}
                            id="select"
                        >
                            <option value="INR">INR</option>
                            <option value="USD">USD</option>
                            <option value="btc">BTC</option>
                            <option value="eth">ETH</option>
                            <option value="ltc">LTC</option>
                            <option value="bch">BCH</option>
                            <option value="bnb">BNB</option>
                            <option value="eos">EOS</option>
                            <option value="jpy">JPY</option>
                            <option value="xlm">XLM</option>
                            <option value="link">LINK</option>
                            <option value="chf">CHF</option>
                            <option value="cad">CAD</option>
                        </select>


                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Nav