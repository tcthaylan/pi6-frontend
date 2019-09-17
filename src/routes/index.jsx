import Home from './Home/Index'
import RestaurantList from './Restaurant/List/Index'
import RestaurantMenu from './Menu/List/Index'

const routes = [
  {
    path: '/',
    exact: true,
    name: 'Página inicial',
    component: Home,
	},
  {
    path: '/restaurantes/list',
    exact: true,
    name: 'Lista de Restaurantes',
    component: RestaurantList,
	},
  {
    path: '/restaurantes/menu/list',
    exact: true,
    name: 'Menu restaurante',
    component: RestaurantMenu,
	},
];

export default routes;