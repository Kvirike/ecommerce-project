import { useQuery } from "react-query"
import { Link, useSearchParams } from "react-router-dom"
import Page from "../Page" 
import apiRequest from "../apiRequest";
import { useEffect, useState } from "react";
import img from '../images/cover.jpeg'
import i18next from "i18next";
import { useTranslation } from "react-i18next";
i18next.changeLanguage()

export default function Home(){
  let  [searchParams, setSearchParams] = useSearchParams();
  const [searchValue, setSearchValue]= useState('')
  const { t } = useTranslation()
  const {data} = useQuery(
    ['products', searchParams.get('search')],
    () => apiRequest('GET', `api/products?q=${searchParams.get('search') || ''}`));

  useEffect(() => {
    setSearchValue(searchParams.get('search'));
  },[])

  function onSearchSubmit(e){
    e.preventDefault();
    setSearchParams({
      search: searchValue
    })
  }
    return(
    <Page>
      <header className="header">      
            <img src={img} className="cover_img" alt="cover img"></img>
      </header>
      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="search">
            <form action="" onSubmit={onSearchSubmit}>
              <input type="text" value={searchValue} onChange={e => setSearchValue(e.target.value)}/>
              <button type="submit">{t('search')}</button>
            </form>
          </div>
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {
              (data || []).map(item =>(
                <div className="col mb-5" key={item.id}>
              <Link to={`/product/${item.id}`}>
              <div className="card h-100">
                {/* Product image*/}
                <img
                  className="card-img-top"
                  src={item.image}
                  alt="..."
                />
                {/* Product details*/}
                <div className="card-body p-4">
                  <div className="text-center">
                    {/* Product name*/}
                    <h5 className="fw-bolder">{item.title}</h5>
                    {/* Product price*/}
                    ${item.price}
                  </div>
                </div>
                {/* Product actions*/}
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div className="text-center">
                    <a className="btn btn-outline-dark mt-auto" href="#">
                      View options
                    </a>
                  </div>
                </div>
              </div>
              </Link>
            </div>
              ))
            }
          </div>
        </div>
      </section>
    </Page>
    )
}