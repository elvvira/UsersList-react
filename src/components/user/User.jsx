import { useNavigate } from 'react-router-dom';
import {
	Card,
	ImgCard,
	StyledActive,
	StyledMail,
	StyledName,
	UserInfo,
	UserStatus
} from './styled';

const User = ({
	name,
	profileImage,
	username,
	active,
	userId,
	check,
	setCheck
}) => {
	const navigate = useNavigate();
	return (
		<Card>
			<UserInfo>
				<ImgCard src={profileImage} alt='' />

				<div>
					<StyledName> {name}</StyledName>
					<StyledMail>@{username}</StyledMail>
				</div>
			</UserInfo>
			<UserStatus>
				<div>
					<StyledActive value={active}>
						{active ? 'Activo' : 'Inactivo'}
					</StyledActive>
				</div>
				<button onClick={() => navigate(`/user-info/${userId}`)}>
					Ver Detalles
				</button>
			</UserStatus>
		</Card>
	);
};
export default User;
