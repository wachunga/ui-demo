import React, { Component } from 'react';

import { Flex, ResponsiveFontStyleProp } from 'zbase';

class FieldRow extends Component<{ role?: string }> {
  static defaultProps = {
    fontStyle: 'controls.m' as ResponsiveFontStyleProp,
  };
  render() {
    return <Flex mb={4} wrap {...this.props} />;
  }
}

export default FieldRow;
