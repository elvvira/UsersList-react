import { ContainerHome, StyledH1 } from './styled';
import FilterUsers from '../../components/filter-users/FilterUsers';

const Home = () => {
	return (
		<ContainerHome>
			<StyledH1>Listado de usuarios</StyledH1>
			<FilterUsers />
		</ContainerHome>
	);
};

export default Home;
