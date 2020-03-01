import React from 'react';
import NavigationGroup from './NavigationGroup';
import NavigationElement from './NavigationElement';

const NavigationContent = () => (
  <>
    <NavigationGroup>
      <NavigationElement href='/'>Introduction</NavigationElement>
    </NavigationGroup>
    <NavigationGroup title='Core'>
      <NavigationElement href='/buttons'>Button</NavigationElement>
      <NavigationElement href='/checkbox'>CheckboxBase</NavigationElement>
      <NavigationElement href='/input'>InputBase</NavigationElement>
      <NavigationElement href='/switch'>SwitchBase</NavigationElement>
    </NavigationGroup>
    <NavigationGroup title='Form'>
      <NavigationElement href='/form'>Form</NavigationElement>
    </NavigationGroup>
    <NavigationGroup title='Data' />
    <NavigationGroup title='Styles'>
      <NavigationElement href='/theme'>Theme</NavigationElement>
    </NavigationGroup>
  </>
);

export default NavigationContent;