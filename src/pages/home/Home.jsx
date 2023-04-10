import { useState } from 'react';
import User from '../../components/user/User';
import { USERS } from '../../constants/info';
import { ContainerHome } from './styled';
import Search from '../../components/search/search';

const Home = () => {
	const [check, setCheck] = useState();
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
