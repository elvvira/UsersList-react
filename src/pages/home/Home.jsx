import { useState } from 'react';
import User from '../../components/user/User';
import { USERS } from '../../constants/info';
import { ContainerHome } from './styled';
import Search from '../../components/search/search';
import filterActive from '../../components/filter-users/FilterUsers';

const Home = () => {
	const [check, setCheck] = useState();
	const USERS = filterActive();
	return (
		<ContainerHome>
			<h1>Listado de usuarios</h1>
			<Search check={check} setCheck={setCheck}></Search>
			{USERS.map(card => {
				return (
					<User
						check={check}
						setCheck={setCheck}
						key={card.userId}
						{...card}
					></User>
				);
			})}
		</ContainerHome>
	);
};

export default Home;
