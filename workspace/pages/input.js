import React from 'react';
import {InputBase} from '@emblem-ui/core';

const InputPage = () => (
  <div>
    <div style={{padding: '4px 8px'}}>
      <InputBase value='value' />
    </div>
    <div style={{padding: '4px 8px'}}>
      <InputBase value='Danger' isError />
    </div>
    <div style={{padding: '4px 8px'}}>
      <InputBase value='Warning' isWarning />
    </div>
    <div style={{padding: '4px 8px'}}>
      <InputBase value='Success' isSuccess />
    </div>
    <div style={{padding: '4px 8px'}}>
      <InputBase value='Info' isInfo />
    </div>
    <div style={{padding: '4px 8px'}}>
      <InputBase value='Disabled' isDisabled />
    </div>
    <div style={{padding: '4px 8px'}}>
      <InputBase value='value' elementSize='small' />
    </div>
    <div style={{padding: '4px 8px'}}>
      <InputBase value='value' elementSize='default' />
    </div>
    <div style={{padding: '4px 8px'}}>
      <InputBase value='value' elementSize='large' />
    </div>
  </div>
);

InputPage.propTypes = {};

InputPage.defaultProps = {};

export default InputPage;
