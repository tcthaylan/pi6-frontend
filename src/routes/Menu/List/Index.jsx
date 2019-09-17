import React from 'react'
import './Index.css'
import MenuItem from '../../../components/MenuItem'

const MenuList = () => {
  return(
    <div className="menuContainer">
      <div className="banner-menu"/>
      <div className="menu">
        <h2 className="menu-title">Lanches Dolor</h2>
        <div className="menu-filters">
          <h4>Filtrar por</h4>
          <button>Entrega</button>
          <button>Cozinha</button>
          <button>Pagamento</button>
        </div>
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
      <div className="paginate">
        <ol className="paginate-list">
          <li>{'<'}</li>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
          <li>{'>'}</li>
        </ol>
      </div>
    </div>
  )
}

export default MenuList