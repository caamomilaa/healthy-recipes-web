import { Route, Routes } from 'react-router-dom';
import Home from '../../pages/home/Home';
import About from '../../pages/about/About';
import Recipes from '../../pages/recipes/Recipes';
import RecipesDetails from '../../pages/recipes-details/RecipesDetails';

const Router = () => {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/about' element={<About />} />
			<Route path='/recipes' element={<Recipes />} />
			<Route path='/details' element={<RecipesDetails />} />
		</Routes>
	);
};
export default Router;
