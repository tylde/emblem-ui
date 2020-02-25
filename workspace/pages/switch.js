import React from 'react';
import {SwitchBase} from '@emblem-ui/core';

import useToggle from '../hooks/useToggle';

const SwitchPage = () => {
  const [sw0, ssw0] = useToggle(true);
  const [sw1, ssw1] = useToggle(true);
  const [sw2, ssw2] = useToggle(true);
  const [sw3, ssw3] = useToggle(true);
  const [sw4, ssw4] = useToggle(true);
  const [sw5, ssw5] = useToggle(true);
  const [sw6, ssw6] = useToggle(true);
  const [sw7, ssw7] = useToggle(true);
  const [sw8, ssw8] = useToggle(true);

  const switches = [
    {key: 'sw0', checked: sw0, onChange: ssw0, elementColor: 'primary', checkedIcon: 'check', icon: 'cross'},
    {key: 'sw1', checked: sw1, onChange: ssw1, elementColor: 'primary', checkedIcon: 'check'},
    {key: 'sw2', checked: sw2, onChange: ssw2, elementColor: 'danger', checkedIcon: 'cross'},
    {key: 'sw3', checked: sw3, onChange: ssw3, elementColor: 'warning', checkedIcon: 'slash'},
    {key: 'sw4', checked: sw4, onChange: ssw4, elementColor: 'dark', checkedIcon: 'minus'},
    {key: 'sw5', checked: sw5, onChange: ssw5, elementColor: 'success', checkedIcon: 'plus'},
    {key: 'sw6', checked: sw6, onChange: ssw6, elementColor: 'secondary', checkedIcon: 'square'},
    {key: 'sw7', checked: sw7, onChange: ssw7, elementColor: 'info', checkedIcon: 'circle'},
    {key: 'sw8', checked: sw8, onChange: ssw8, elementColor: 'primary', checkedIcon: 'diamond'}
  ];

  return (
    <div>
      <div style={{display: 'flex', padding: 10}}>
        <div style={{marginRight: 10}}><SwitchBase /></div>
        <div style={{marginRight: 10}}><SwitchBase checked /></div>
        <div style={{marginRight: 10}}><SwitchBase disabled /></div>
        <div style={{marginRight: 10}}><SwitchBase disabled checked /></div>
      </div>
      {switches.map(({key, elementColor, checkedIcon, icon, checked, onChange}) => (
        <div style={{display: 'flex', padding: 10}} key={key}>
          <div style={{marginRight: 10}}>
            <SwitchBase
              checked={checked}
              checkedIcon={checkedIcon}
              elementColor={elementColor}
              icon={icon}
              onChange={onChange}
            />
          </div>
          <div style={{marginRight: 10}}>
            <SwitchBase
              checkedIcon={checkedIcon}
              elementColor={elementColor}
              icon={icon}
              onChange={() => {}}
            />
          </div>
          <div style={{marginRight: 10}}>
            <SwitchBase
              checkedIcon={checkedIcon}
              disabled
              elementColor={elementColor}
              icon={icon}
              onChange={() => {}}
            />
          </div>
          <div style={{marginRight: 10}}>
            <SwitchBase
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

SwitchPage.propTypes = {};

SwitchPage.defaultProps = {};

export default SwitchPage;
