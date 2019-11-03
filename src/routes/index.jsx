import Home from './Home/Index'
import RestaurantList from './Restaurant/List/Index'
import RestaurantMenu from './Menu/List/Index'
import Login from './Auth/Login/Index'
import Register from './Auth/Register/Index'
import AdminList from './Admin/ListRestaurant/Index'
import AdminAddRestaurant from './Admin/AddRestaurant/Index'
import AdminEditRestaurant from './Admin/EditRestaurant/Index'
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
  },
  {
    path: '/auth/register',
    exact: true,
    name: 'Register',
    component: Register,
  },
  {
    path: '/admin',
    exact: true,
    name: 'Admin',
    component: AdminList,
  },
  {
    path: '/admin/addRestaurant',
    exact: true,
    name: 'AdminAddRestaurant',
    component: AdminAddRestaurant,
  },
  {
    path: '/admin/editRestaurant',
    exact: true,
    name: 'AdminEditRestaurant',
    component: AdminEditRestaurant,
  }
];

export default routes;