/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';

import { ContainerFilter, InputSearch, CheckOnlyTags } from './styles';

function Filter(props) {
  const { search, handleChange, searchTagOnly, handleInputChange } = props;
  return (
    <ContainerFilter>
      <form>
        <InputSearch
          value={search}
          onChange={handleChange}
          type="text"
          placeholder="Search"
        />
        <label>
          <CheckOnlyTags
            checked={searchTagOnly}
            onChange={handleInputChange}
            type="checkbox"
            id="CheckOnlyTags"
          />
          Search in tags only
        </label>
      </form>
    </ContainerFilter>
  );
}

Filter.propTypes = {
  search: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  searchTagOnly: PropTypes.bool.isRequired,
  handleInputChange: PropTypes.func.isRequired,
};
export default Filter;
