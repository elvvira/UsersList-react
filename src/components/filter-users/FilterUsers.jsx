import { USERS } from '../../constants/info';

const filterActive = active => {
	let usersFilter = [];
	if (active) {
		usersFilter = USERS.filter(user => user.active);
	} else {
		usersFilter = [...USERS];
	}
	return usersFilter;
};
export default filterActive;
