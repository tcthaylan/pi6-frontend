import Home from './Home/Index'
import RestaurantList from './Restaurant/List/Index'

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
];

export default routes;