import { useNavigate, useParams } from 'react-router-dom';
import { USERS } from '../../constants/info';
import { ButtonInfo, ContainerInfo, UserImg } from './styled';

const UserDetails = () => {
	const params = useParams();
	const userSelect = USERS.find(user => {
		return user.userId === params.userId;
	});
	const navigate = useNavigate();

	return (
		<>
			<ContainerInfo>
				<UserImg src={userSelect.profileImage} alt='' />
				<h1>Hi! My name is {userSelect.name}</h1>
				<div>
					<p>I'm {userSelect.age}</p>
					<p>My username is {userSelect.username}</p>
					<p>You can contact me in {userSelect.email}</p>
					<p>
						My Address is: {userSelect.address.street}{' '}
						<span>{userSelect.address.city}</span>
						<span>{userSelect.address.zipCode}</span>
					</p>
					<p>You can call me at: {userSelect.phone} </p>
				</div>
			</ContainerInfo>
			<ButtonInfo>
				<button onClick={() => navigate(`/`)}>back</button>
			</ButtonInfo>
		</>
	);
};
export default UserDetails;
