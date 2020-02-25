import React from 'react';
import {CheckboxBase} from '@emblem-ui/core';

import useToggle from '../hooks/useToggle';

const CheckboxPage = () => {
  const [cb0, scb0] = useToggle(true);
  const [cb1, scb1] = useToggle(true);
  const [cb2, scb2] = useToggle(true);
  const [cb3, scb3] = useToggle(true);
  const [cb4, scb4] = useToggle(true);
  const [cb5, scb5] = useToggle(true);
  const [cb6, scb6] = useToggle(true);
  const [cb7, scb7] = useToggle(true);
  const [cb8, scb8] = useToggle(true);

  const checkboxed = [
    {key: 'cb0', checked: cb0, onChange: scb0, elementColor: 'primary', checkedIcon: 'check'},
    {key: 'cb1', checked: cb1, onChange: scb1, elementColor: 'primary', checkedIcon: 'check'},
    {key: 'cb2', checked: cb2, onChange: scb2, elementColor: 'danger', checkedIcon: 'cross'},
    {key: 'cb3', checked: cb3, onChange: scb3, elementColor: 'warning', checkedIcon: 'slash'},
    {key: 'cb4', checked: cb4, onChange: scb4, elementColor: 'dark', checkedIcon: 'minus'},
    {key: 'cb5', checked: cb5, onChange: scb5, elementColor: 'success', checkedIcon: 'plus'},
    {key: 'cb6', checked: cb6, onChange: scb6, elementColor: 'secondary', checkedIcon: 'square'},
    {key: 'cb7', checked: cb7, onChange: scb7, elementColor: 'info', checkedIcon: 'circle'},
    {key: 'cb8', checked: cb8, onChange: scb8, elementColor: 'primary', checkedIcon: 'diamond'}
  ];

  return (
    <div>
      <div style={{display: 'flex', padding: 10}}>
        <div style={{marginRight: 10}}><CheckboxBase /></div>
        <div style={{marginRight: 10}}><CheckboxBase checked /></div>
        <div style={{marginRight: 10}}><CheckboxBase disabled /></div>
        <div style={{marginRight: 10}}><CheckboxBase disabled checked /></div>
      </div>
      {checkboxed.map(({key, elementColor, checkedIcon, icon, checked, onChange}) => (
        <div style={{display: 'flex', padding: 10}} key={key}>
          <div style={{marginRight: 10}}>
            <CheckboxBase
              checked={checked}
              checkedIcon={checkedIcon}
              elementColor={elementColor}
              icon={icon}
              onChange={onChange}
            />
          </div>
          <div style={{marginRight: 10}}>
            <CheckboxBase
              checkedIcon={checkedIcon}
              elementColor={elementColor}
              icon={icon}
              onChange={() => {}}
            />
          </div>
          <div style={{marginRight: 10}}>
            <CheckboxBase
              checkedIcon={checkedIcon}
              disabled
              elementColor={elementColor}
              icon={icon}
              onChange={() => {}}
            />
          </div>
          <div style={{marginRight: 10}}>
            <CheckboxBase
              checked
              checkedIcon={checkedIcon}
              disabled
              elementColor={elementColor}
              icon={icon}
              onChange={() => {}}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

CheckboxPage.propTypes = {};

CheckboxPage.defaultProps = {};

export default CheckboxPage;
