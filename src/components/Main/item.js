import React from 'react';
import PropTypes from 'prop-types';

import { ListItem } from './styles';
import RemoveItem from './removeItem';

function Item(props) {
  const { title, description, tags, link, handleRemove, id } = props;
  return (
    <>
      <ListItem>
        <RemoveItem handleRemove={handleRemove} id={id} />
        <h1>
          <a href={link} rel="noopener noreferrer" target="_blank">
            {title}
          </a>
        </h1>
        <p>{description}</p>
        <p>
          {tags.map((tag, index) => (
            <strong className="tag" key={index}>
              #{tag}
            </strong>
          ))}
        </p>
      </ListItem>
    </>
  );
}
Item.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  link: PropTypes.string.isRequired,
  handleRemove: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};
export default Item;
