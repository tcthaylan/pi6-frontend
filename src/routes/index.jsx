import Home from './Home/Index'
import RestaurantList from './Restaurant/List/Index'
import RestaurantMenu from './Menu/List/Index'
import Login from './Auth/Login/Index'

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
  {
    path: '/auth/login',
    exact: true,
    name: 'Login',
    component: Login,
  }
];

export default routes;