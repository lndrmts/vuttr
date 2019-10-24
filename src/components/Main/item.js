import React from 'react';
import PropTypes from 'prop-types';

import { ListItem } from './styles';
import RemoveItem from './removeItem';

function Item(props) {
  const { title, description, tags, link } = props;
  return (
    <>
      <ListItem>
        <RemoveItem />
        <h1>
          <a href={link} rel="noopener noreferrer" target="_blank">
            {title}
          </a>
        </h1>
        <p>{description}</p>
        <p>
          {tags.map(tag => (
            <strong className="tag" key={tag}>
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
  tags: PropTypes.arrayOf(PropTypes.object).isRequired,
  link: PropTypes.string.isRequired,
};
export default Item;
