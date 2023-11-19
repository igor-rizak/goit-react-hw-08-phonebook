import { NotificationMessage } from '../NotificationMessage/NotificationMessage';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from '../redux/selectors';
import { filterContacts } from '../redux/filtersSlice';
import { FilterSection } from './Filter.styled';

export const Filter = () => {
  const { items: contacts} = useSelector(getContacts)
  const dispatch = useDispatch()

  const handleFilterChange = e => {
    dispatch(filterContacts(e.target.value.toLowerCase().trim()));
  }

  return contacts.length !== 0 ? (
    <FilterSection>
      <label>Find contacts by name:
      <input
        type="text"
        name="filter"
        onChange={handleFilterChange}
              />
        </label>
    </FilterSection>
  ) : (
    <NotificationMessage />
  );
};