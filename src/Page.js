import { useTranslation } from "react-i18next";
import { Link, NavLink, } from "react-router-dom";
import i18next from "i18next";
i18next.changeLanguage()

export default function Page({children}){
  const { t } =useTranslation();
    return(
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container px-4 px-lg-5">
      <Link to="/home" className="navbar-brand">
        Tech Shop
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
          <li className="nav-item">
            <NavLink 
              to="/home" 
              className={({isActive}) => isActive? "nav-link active" : "nav-link" }
              aria-current="page">
              {t('home')}
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink 
              to="/product" 
              className= {({isActive}) => isActive? "nav-link active" : "nav-link"}
              aria-current="page">
              {t('products')}
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink 
              to="/about"
              className={({isActive}) => isActive? "nav-link active" : "nav-link"}>
              {t('about')}
            </NavLink>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              id="navbarDropdown"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Shop
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li>
                <a className="dropdown-item" href="#!">
                  All Products
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <a className="dropdown-item" href="#!">
                  Popular Items
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#!">
                  New Arrivals
                </a>
              </li>
            </ul>
          </li>
        </ul>

        <button onClick={() => i18next.changeLanguage('ka')}>GE</button>
        <button onClick={() => i18next.changeLanguage('en')}>ENG</button>
        <form className="d-flex">

          <button className="btn btn-outline-dark" type="submit">
            <i className="bi-cart-fill me-1" />
            {t('cart')}
            <span className="badge bg-dark text-white ms-1 rounded-pill">
              0
            </span>
          </button>
        </form>
      </div>
    </div>
        </nav>
        {children}
         <footer className="py-5 bg-dark">
            <div className="container">
            <p className="m-0 text-center text-white">
                social media links
            </p>
            </div>
        </footer>
        </>
    )
}