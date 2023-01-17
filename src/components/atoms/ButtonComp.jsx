import React from 'react';
import { Button, ButtonGroup } from '@chakra-ui/react';
import HOC from '../../HOC';
import { connect } from 'react-redux';

const ButtonComp = (props) => {
  // console.log('button', props);

  return (
    <Button colorScheme="blue" onClick={() => props.handleRedux()}>
      Create a new ticket +{' '}
    </Button>
  );
};

const mapStateToProps = (state) => {
  return {
    redux: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleRedux: () => dispatch({ type: 'TEST' }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ButtonComp);
