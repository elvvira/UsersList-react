import styled from 'styled-components';

const Card = styled.div`
	height: 70px;
	display: flex;
	justify-content: space-between;
	padding: 1rem;
	border-radius: 1rem;
	box-shadow: ${({ value }) =>
		value
			? '0px 0px 10px rgb(50  205 50/0.3)'
			: '0px 0px 10px rgb(255 0 0/0.2)'};
	margin-bottom: 1rem;
	background: white;
`;
const UserInfo = styled.div`
	display: flex;
	align-items: center;
	gap: 1rem;
`;

const UserStatus = styled.div`
	display: flex;
	align-items: center;
	gap: 1rem;
`;
const ImgCard = styled.img`
	width: 50px;
	height: 50px;
	border-radius: 100%;
`;
const StyledName = styled.h2`
	font-size: 1rem;
	text-align: left;
`;
const StyledMail = styled.p`
	font-size: 0.8rem;
	text-align: left;
`;
const StyledActive = styled.p`
	color: ${({ value }) => (value ? 'green' : 'red')};
`;
export {
	Card,
	ImgCard,
	StyledName,
	StyledMail,
	UserInfo,
	UserStatus,
	StyledActive
};
