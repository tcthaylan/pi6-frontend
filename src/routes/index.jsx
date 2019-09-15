import Home from './Home/Index'
import Admin from './Admin/Index'

const routes = [
  {
    path: '/home',
    exact: true,
    name: 'Home',
    component: Home,
	},
  {
    path: '/admin',
    exact: true,
    name: 'Admin',
    component: Admin,
	},
];

export default routes;