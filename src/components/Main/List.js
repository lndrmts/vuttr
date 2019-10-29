import React, { useMemo } from 'react';
import PropTypes from 'prop-types';

import Item from './item';

function List(props) {
  const { tool, handleRemove } = props;
  const toolSize = useMemo(() => tool.length, [tool]);
  return (
    <>
      {toolSize ? (
        <div>
          {tool.map(t => (
            <Item
              key={t.id}
              title={t.title}
              description={t.description}
              tags={t.tags}
              link={t.link}
              id={t.id}
              handleRemove={handleRemove}
            />
          ))}
        </div>
      ) : (
        <h3>No results were found!</h3>
      )}
    </>
  );
}

List.propTypes = {
  tool: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleRemove: PropTypes.func.isRequired,
};

export default List;
