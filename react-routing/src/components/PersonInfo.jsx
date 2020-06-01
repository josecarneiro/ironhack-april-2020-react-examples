import React from 'react';

function PersonInfo(props) {
  return <div>{props.match.params.name.toUpperCase()}</div>;
}

export default PersonInfo;
