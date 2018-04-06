import React from 'react';

import LoadingSpinner from './LoadingSpinner';
import { styled } from 'z-frontend-theme';
import { Flex, FlexProps } from 'zbase';

const StyledContainer = styled<FlexProps>(Flex)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

/**
 * A simple component to represent loading page content.
 */
class LoadingScreen extends React.Component<FlexProps> {
  render() {
    return (
      <StyledContainer {...this.props}>
        <LoadingSpinner s="xlarge" />
      </StyledContainer>
    );
  }
}

export default LoadingScreen;
