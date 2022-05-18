import React from 'react';
// import PropTypes from 'prop-types';
import { Button } from '@mui/material';

import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from './state/testCounter';

function TestPage() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <>
      <Button
        onClick={() => dispatch(increment())}
      >
        increment

      </Button>
      {count}
      <Button
        onClick={() => dispatch(decrement())}
      >
        decrement

      </Button>
    </>
  );
}

TestPage.propTypes = {};

export default TestPage;
