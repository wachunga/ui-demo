import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Box } from 'zbase';
import { Search, ButtonDropdown, ButtonDropdownItemLink } from 'z-frontend-forms';

import TopNavBar from './TopNavBar';

const dropdownItems = [
  <ButtonDropdownItemLink key="settings" href="https://google.com">
    Settings
  </ButtonDropdownItemLink>,
  <ButtonDropdown.ItemButton key="logout" onClick={action('topnavbar-logout-click')}>
    Log Out
  </ButtonDropdown.ItemButton>,
];

const optionList = [
  { value: 'Option 1' },
  { value: 'Option 2' },
  { value: 'Option 3' },
  { value: 'Option 4' },
  { value: 'Option 5' },
  { value: 'Option 6' },
];

const getOptions = query => optionList.filter(option => option.value.toLowerCase().includes(query.toLowerCase()));

storiesOf('TopNavBar', module)
  .add('default', () => <TopNavBar dropdownItems={dropdownItems} productTitleDefault="Product Title" />)
  .add('with children', () => (
    <TopNavBar dropdownItems={dropdownItems} productTitleDefault="Product Title" contentAlignLeft>
      <Box ml={2}>
        <Search getOptions={getOptions} async={false} debounce={false} />
      </Box>
    </TopNavBar>
  ));
