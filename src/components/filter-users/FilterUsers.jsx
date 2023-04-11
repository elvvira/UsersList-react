import PrintUsers from '../print-users/PrintUsers';
import { StyledForm } from './styled';
import { USERS } from '../../constants/info';
import { useState } from 'react';

const FilterUsers = () => {
	const [onlyActive, setOnlyActive] = useState(false);
	const [search, setSearch] = useState('');
	const [sortBy, SetSortBy] = useState('defect');

	let filteredUsers = filterActiveUsers(USERS, onlyActive);
	filteredUsers = filterUserByName(filteredUsers, search);
	filteredUsers = sortUsers(filteredUsers, sortBy);

	return (
		<>
			<StyledForm>
				<div>
					<input
						onChange={e => setSearch(e.target.value)}
						type='text'
						name=''
						id=''
					/>
				</div>
				<div>
					<label htmlFor='active'>Sólo activos</label>
					<input
						onChange={e => setOnlyActive(e.target.checked)}
						type='checkbox'
						name=''
						id='active'
					/>
				</div>
				<div>
					<select onChange={e => SetSortBy(e.target.value)} name='select' id=''>
						<option value='defect'>Por defecto</option>
						<option value='name'>Por nombre</option>
					</select>
				</div>
			</StyledForm>
			<PrintUsers users={filteredUsers} />
		</>
	);
};

const filterActiveUsers = (users, onlyActive) => {
	if (onlyActive) {
		return users.filter(user => user.active);
	}
	return [...users];
};

const filterUserByName = (users, search) => {
	const normalizeSearch = search.toLowerCase();
	if (search) {
		return users.filter(user =>
			user.name.toLowerCase().includes(normalizeSearch)
		);
	}

	return [...users];
};

const sortUsers = (users, sortBy) => {
	if (sortBy === 'defect') {
		return [...users];
	} else if (sortBy === 'name') {
		return [...users].sort((x, y) => {
			if (x.name < y.name) return -1;
			if (x.name > y.name) return 1;
			return 0;
		});
	}
};

export default FilterUsers;
