import React from 'react';
import { FilterContainer, FilterInput, FilterLabal } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { updateFilter } from '../../redux/contactsSlice';
import { getFilter } from '../../redux/selectors';

const Filter = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector(getFilter);

  const handleFilterChange = (evt) => {
    const newValue = evt.target.value;
    dispatch(updateFilter(newValue.toLowerCase().trim()));
  };

  return (
    <FilterContainer>
      <FilterLabal>
        Find contacts by name:
        <FilterInput type="text" value={filterValue} onChange={handleFilterChange} />
      </FilterLabal>
    </FilterContainer>
  );
};

export default Filter;
