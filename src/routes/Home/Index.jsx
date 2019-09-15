import React from 'react';
import './Index.css'

const Home = () => {
  return(
  <div className="homeContent">
    <div className="banner">
      <div className="banner-text">
        <h1>Fugiat consectetur</h1>
        <p>Id sit pariatur proident officia ex.</p>
      </div>
      <input type="text" className="banner-input" placeholder="Digite o seu endereço"/>
    </div>
    {/*  */}
    <div className="functionality">
      <ul className="functionality-list">
        <li className="functionality-list-item">
          <span className="card-image"></span>
          <h3 className="card-title">Non cupidatat</h3>
          <p className="card-text">Deserunt commodo deserunt occaecat adipisicing Lorem.</p>
        </li>
        <li className="functionality-list-item">
          <span className="card-image"></span>
          <h3 className="card-title">Non cupidatat</h3>
          <p className="card-text">Deserunt commodo deserunt occaecat adipisicing Lorem.</p>
        </li>
        <li className="functionality-list-item">
          <span className="card-image"></span>
          <h3 className="card-title">Non cupidatat</h3>
          <p className="card-text">Deserunt commodo deserunt occaecat adipisicing Lorem.</p>
        </li>
      </ul>
    </div>
    {/*  */}
    <div className="categories">
      <h2>Explore as categorias em alta</h2>
      <ul>
        
      </ul>
    </div>
  </div>
  )
}

export default Home;