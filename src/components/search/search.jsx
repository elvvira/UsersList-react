import { StyledForm } from './styled';

const Search = ({ check, setCheck }) => {
	return (
		<StyledForm>
			<div>
				<input type='text' name='' id='' />
			</div>
			<div>
				<label htmlFor='active'>Sólo activos</label>
				<input
					onChange={e => filterActive(e.target.checked)}
					type='checkbox'
					name=''
					id='active'
				/>
			</div>
			<div>
				<select name='' id=''>
					<option value=''>Por defecto</option>
					<option value=''>Por nombre</option>
				</select>
			</div>
		</StyledForm>
	);
};
const filterActive = active => {
	let usersFilter = [];
	if (active) {
		usersFilter = USERS.filter(user => user.active);
	} else {
		usersFilter = [...USERS];
	}
	console.log(active);
};
export default Search;
