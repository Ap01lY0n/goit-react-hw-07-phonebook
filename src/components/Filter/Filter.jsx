import React from 'react';
import { FilterContainer, FilterInput, FilterLabal } from './Filter.styled';
import { selectFilter } from '../../redux/selectors';
import { changeFilter } from '../../redux/filterSlice';
import { useSelector, useDispatch } from 'react-redux';

const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();
  const onChange = event => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <FilterContainer>
      <FilterLabal>Find contact by name</FilterLabal>
      <FilterInput
        type="text"
        placeholder="Find contact"
        name="filter"
        value={filter}
        onChange={onChange}
      />
    </FilterContainer>
  );
}
export default Filter;