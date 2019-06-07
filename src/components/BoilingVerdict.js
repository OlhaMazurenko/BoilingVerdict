import React from 'react';

function BoilingVerdict(props) {
  if (props.celsius >= 100) {
    return <p>Boiling</p>
  }
  return <p>Not</p>
}

export default BoilingVerdict;