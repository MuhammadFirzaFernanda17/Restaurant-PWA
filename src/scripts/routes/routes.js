import HomePage from '../views/pages/home';
import FavoritePage from '../views/pages/favorit';
import DetailPage from '../views/pages/detail';
 
const routes = {
  '/': HomePage, // default page
  '/utama': HomePage,
  '/favorit': FavoritePage,
  '/detail/:id': DetailPage,
};
 
export default routes;