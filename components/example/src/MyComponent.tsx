import React, { Component } from 'react';
import styled from 'styled-components';

// tslint:disable-next-line:variable-name
const StyledSpan = styled.span`color: ${props => props.theme.colors.primary.orange100};`;

export default ({ children }) => {
  return <StyledSpan>{children}</StyledSpan>;
};