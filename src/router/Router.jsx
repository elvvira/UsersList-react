import { Route, Routes } from 'react-router-dom';
import Home from '../pages/home/Home';
import UserDetails from '../pages/user-details/UserDetails';

const Router = () => {
	return (
		<Routes>
			<Route path={'/'} element={<Home />}></Route>
			<Route path={'/user-info/:userId'} element={<UserDetails />}></Route>
		</Routes>
	);
};

export default Router;
