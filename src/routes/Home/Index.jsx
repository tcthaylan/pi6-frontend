import React from 'react';
import './Index.css'
import Category from '../../components/Category'

const Home = (props) => {
  const { history } = props;
  return(
  <div className="homeContent">
    <div className="banner">
      <div className="banner-text">
        <h1>Encontre as melhores pizzarias da sua região</h1>
        <p>As melhores pizzas por um preço que cabe no seu bolso</p>
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
          <h3 className="card-title">Custo benefício</h3>
          <p className="card-text">Pizzas saborosas por um preço que cabe no seu bolso.</p>
        </li>
        <li className="functionality-list-item">
          <span className="card-image"></span>
          <h3 className="card-title">Pracidade</h3>
          <p className="card-text">Basta digitar um endereço e você encontrará uma infinidade de sabores</p>
        </li>
        <li className="functionality-list-item">
          <span className="card-image"></span>
          <h3 className="card-title">Variedade</h3>
          <p className="card-text">Encontre as melhores pizzarias da sua cidade com apenas um click</p>
        </li>
      </ul>
    </div>
    {/*  */}
    <div className="categories">
      <h2 className="categories-title">Encontre os melhores sabores</h2>
      <ul className="categories-list">
        <li className="categories-list-item">
          <Category name="Calabresa" image="pizza-calabresa.jpg" />
        </li>
        <li className="categories-list-item">
          <Category name="Chocolate" image="pizza-de-chocolate.jpg" />
        </li>
        <li className="categories-list-item">
          <Category name="Mussarela" image="pizza-mussarela.jpg" />
        </li>
        <li className="categories-list-item">
          <Category name="Portuguesa" image="pizza-portuguesa.jpg" />
        </li>
        <li className="categories-list-item">
          <Category name="Quatro queijos" image="pizza-quatro-queijos.jpg" />
        </li>
      </ul>
    </div>
  </div>
  )
}

export default Home;