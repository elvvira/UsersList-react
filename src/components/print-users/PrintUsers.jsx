import User from '../user/User';

const PrintUsers = ({ users }) => {
	return users.map(user => {
		return <User key={user.userId} {...user}></User>;
	});
};
export default PrintUsers;
