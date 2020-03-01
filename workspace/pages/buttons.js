import React from 'react';
import {Button, ButtonGroup} from '@emblem-ui/core';

import Wrapper from '../components/Wrapper';

const buttons = () => {
  const types = ['primary', 'secondary', 'success', 'info', 'warning', 'danger', 'dark'];

  return (
    <div>
      <Wrapper>
        <div style={{backgroundColor: '#eee', width: 200, height: 200, padding: 10}}>
          <Button elementColor='primary'>Shadow test</Button>
        </div>
      </Wrapper>
      <Wrapper>
        {types.map((type) => {
          const text = type.replace(/^\w/, (c) => c.toUpperCase());
          return (
            <Wrapper key={type}>
              <Button elementColor={type} elementSize='small'>{text}</Button>
            </Wrapper>
          );
        })}
      </Wrapper>

      <Wrapper>
        {types.map((type) => {
          const text = type.replace(/^\w/, (c) => c.toUpperCase());
          return (
            <Wrapper key={type}>
              <Button elementColor={type} elementSize='default'>{text}</Button>
            </Wrapper>
          );
        })}
      </Wrapper>

      <Wrapper>
        {types.map((type) => {
          const text = type.replace(/^\w/, (c) => c.toUpperCase());
          return (
            <Wrapper key={type}>
              <Button elementColor={type} elementSize='large'>{text}</Button>
            </Wrapper>
          );
        })}
      </Wrapper>

      <Wrapper>
        {types.map((type) => {
          const text = type.replace(/^\w/, (c) => c.toUpperCase());
          return (
            <Wrapper key={type}>
              <Button elementColor={type} loading>{text}</Button>
            </Wrapper>
          );
        })}
      </Wrapper>

      <Wrapper>
        {types.map((type) => {
          const text = type.replace(/^\w/, (c) => c.toUpperCase());
          return (
            <Wrapper key={type}>
              <Button elementColor={type} elementStyle='outline'>{text}</Button>
            </Wrapper>
          );
        })}
      </Wrapper>

      <Wrapper>
        {types.map((type) => {
          const text = type.replace(/^\w/, (c) => c.toUpperCase());
          return (
            <Wrapper key={type}>
              <Button elementColor={type} elementStyle='outline' loading>{text}</Button>
            </Wrapper>
          );
        })}
      </Wrapper>

      <Wrapper>
        {types.map((type) => {
          const text = type.replace(/^\w/, (c) => c.toUpperCase());
          return (
            <Wrapper key={type}>
              <Button elementColor={type} elementStyle='dashed'>{text}</Button>
            </Wrapper>
          );
        })}
      </Wrapper>

      <Wrapper>
        {types.map((type) => {
          const text = type.replace(/^\w/, (c) => c.toUpperCase());
          return (
            <Wrapper key={type}>
              <Button elementColor={type} elementStyle='dashed' loading>{text}</Button>
            </Wrapper>
          );
        })}
      </Wrapper>

      <Wrapper>
        {types.map((type) => {
          const text = type.replace(/^\w/, (c) => c.toUpperCase());
          return (
            <Wrapper key={type}>
              <Button elementColor={type} elementStyle='subtle'>{text}</Button>
            </Wrapper>
          );
        })}
      </Wrapper>

      <Wrapper>
        {types.map((type) => {
          const text = type.replace(/^\w/, (c) => c.toUpperCase());
          return (
            <Wrapper key={type}>
              <Button elementColor={type} elementStyle='subtle' loading>{text}</Button>
            </Wrapper>
          );
        })}
      </Wrapper>

      <Wrapper>
        {types.map((type) => {
          const text = type.replace(/^\w/, (c) => c.toUpperCase());
          return (
            <Wrapper key={type}>
              <Button elementColor={type} disabled>{text}</Button>
            </Wrapper>
          );
        })}
      </Wrapper>

      <Wrapper>
        {types.map((type) => {
          const text = type.replace(/^\w/, (c) => c.toUpperCase());
          return (
            <Wrapper key={type}>
              <Button elementColor={type} disabled loading>{text}</Button>
            </Wrapper>
          );
        })}
      </Wrapper>

      <Wrapper>
        {types.map((type) => (
          <Wrapper key={type}>
            <ButtonGroup direction='vertical'>
              <Button elementColor={type}>Text 1</Button>
              <Button elementColor={type}>Text 2</Button>
              <Button elementColor={type}>Text 3</Button>
              <Button elementColor={type}>Text 4</Button>
              <Button elementColor={type}>Text 5</Button>
            </ButtonGroup>
          </Wrapper>
        ))}
      </Wrapper>

      <Wrapper>
        {types.map((type) => (
          <Wrapper key={type}>
            <ButtonGroup direction='vertical'>
              <Button elementColor={type} elementStyle='outline'>Text 1</Button>
              <Button elementColor={type} elementStyle='outline'>Text 2</Button>
              <Button elementColor={type} elementStyle='outline'>Text 3</Button>
              <Button elementColor={type} elementStyle='outline'>Text 4</Button>
              <Button elementColor={type} elementStyle='outline'>Text 5</Button>
            </ButtonGroup>
          </Wrapper>
        ))}
      </Wrapper>

      <Wrapper styles={{flexDirection: 'column'}}>
        {types.map((type) => (
          <Wrapper key={type}>
            <ButtonGroup>
              <Button elementColor={type}>Text 1</Button>
              <Button elementColor={type}>Text 2</Button>
              <Button elementColor={type}>Text 3</Button>
              <Button elementColor={type}>Text 4</Button>
              <Button elementColor={type}>Text 5</Button>
            </ButtonGroup>
          </Wrapper>
        ))}
      </Wrapper>

      <Wrapper styles={{flexDirection: 'column'}}>
        {types.map((type) => (
          <Wrapper key={type}>
            <ButtonGroup>
              <Button elementColor={type} elementStyle='outline'>Text 1</Button>
              <Button elementColor={type} elementStyle='outline'>Text 2</Button>
              <Button elementColor={type} elementStyle='outline'>Text 3</Button>
              <Button elementColor={type} elementStyle='outline'>Text 4</Button>
              <Button elementColor={type} elementStyle='outline'>Text 5</Button>
            </ButtonGroup>
          </Wrapper>
        ))}
      </Wrapper>
    </div>
  );
};


export default buttons;
