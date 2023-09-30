import { Input } from 'components/contact-form/ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { filterContact } from 'redux/filterSlice';

export const Filters = () => {
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();
  const changeFilter = newFilter => {
    dispatch(filterContact(newFilter));
  };
  return (
    <Input
      type="text"
      value={filter}
      name="filter"
      placeholder="Write to filter name"
      onChange={event => changeFilter(event.target.value.toLowerCase().trim())}
    />
  );
};
