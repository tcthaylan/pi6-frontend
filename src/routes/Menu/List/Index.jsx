import React from 'react'
import './Index.css'
import MenuItem from '../../../components/MenuItem'

const MenuList = () => {
  return(
    <div className="menuContainer">
      <div className="banner-menu"/>
      <div className="menu">
        <h2>Lanches Dolor</h2>
        <ol className="menu-list">
          <li className="menu-list-item">
            <MenuItem
              name="Hamburguer médio"
              price="24,99"
              desc="Ex fugiat ut amet ipsum minim."
              image="hamburguer.jpg"
            />
          </li>
          <li className="menu-list-item">
            <MenuItem
              name="Hamburguer médio"
              price="24,99"
              desc="Ex fugiat ut amet ipsum minim."
              image="hamburguer.jpg"
            />
          </li>
          <li className="menu-list-item">
            <MenuItem
              name="Hamburguer médio"
              price="24,99"
              desc="Ex fugiat ut amet ipsum minim."
              image="hamburguer.jpg"
            />
          </li>
          <li className="menu-list-item">
            <MenuItem
              name="Hamburguer médio"
              price="24,99"
              desc="Ex fugiat ut amet ipsum minim."
              image="hamburguer.jpg"
            />
          </li>
          <li className="menu-list-item">
            <MenuItem
              name="Hamburguer médio"
              price="24,99"
              desc="Ex fugiat ut amet ipsum minim."
              image="hamburguer.jpg"
            />
          </li>
        </ol>
      </div>
    </div>
  )
}

export default MenuList