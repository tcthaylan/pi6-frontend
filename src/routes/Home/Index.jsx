import React from 'react';
import './Index.css'
import Category from '../../components/Category'

const Home = (props) => {
  const { history } = props;
  return(
  <div className="homeContent">
    <div className="banner">
      <div className="banner-text">
        <h1>Fugiat consectetur</h1>
        <p>Id sit pariatur proident officia ex.</p>
      </div>
      <input type="text" className="banner-input" placeholder="Digite o seu endereço" onKeyUp={(e) => {
        if (e.keyCode === 13) {
          const inputValue = document.querySelector('.banner-input').value;
          history.push({
            pathname: '/restaurantes/list',
            state: JSON.stringify(inputValue),
          })
        }
      }}/>
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
      <h2 className="categories-title">Explore as categorias em alta</h2>
      <ul className="categories-list">
        <li className="categories-list-item">
          <Category name="Brasileira" image="brasileira.jpg" />
        </li>
        <li className="categories-list-item">
          <Category name="Hamburguer" image="hamburguer.jpg" />
        </li>
        <li className="categories-list-item">
          <Category name="Churrasco" image="churrasco.jpg" />
        </li>
        <li className="categories-list-item">
          <Category name="Pizza" image="pizza.jpg" />
        </li>
        <li className="categories-list-item">
          <Category name="Japonesa" image="japonesa.jpg" />
        </li>
      </ul>
    </div>
  </div>
  )
}

export default Home;