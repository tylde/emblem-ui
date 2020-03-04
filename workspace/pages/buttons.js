import React from 'react';
import {Button, ButtonGroup} from '@emblem-ui/core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import ElementWrapper from '../components/ElementWrapper';

const buttons = () => {
  const types = ['primary', 'secondary', 'success', 'info', 'warning', 'danger', 'dark'];

  return (
    <div>
      <ElementWrapper>
        {types.map((type) => {
          const text = type.replace(/^\w/, (c) => c.toUpperCase());
          return (
            <ElementWrapper key={type}>
              <Button elementColor={type} elementSize='small'>{text}</Button>
            </ElementWrapper>
          );
        })}
      </ElementWrapper>

      <ElementWrapper>
        {types.map((type) => {
          const text = type.replace(/^\w/, (c) => c.toUpperCase());
          return (
            <ElementWrapper key={type}>
              <Button elementColor={type} elementSize='default'>{text}</Button>
            </ElementWrapper>
          );
        })}
      </ElementWrapper>

      <ElementWrapper>
        {types.map((type) => {
          const text = type.replace(/^\w/, (c) => c.toUpperCase());
          return (
            <ElementWrapper key={type}>
              <Button elementColor={type} elementSize='large'>{text}</Button>
            </ElementWrapper>
          );
        })}
      </ElementWrapper>

      <ElementWrapper>
        {types.map((type) => {
          const text = type.replace(/^\w/, (c) => c.toUpperCase());
          return (
            <ElementWrapper key={type}>
              <Button elementColor={type} loading>{text}</Button>
            </ElementWrapper>
          );
        })}
      </ElementWrapper>

      <ElementWrapper>
        {types.map((type) => {
          const text = type.replace(/^\w/, (c) => c.toUpperCase());
          return (
            <ElementWrapper key={type}>
              <Button elementColor={type} elementStyle='outline'>{text}</Button>
            </ElementWrapper>
          );
        })}
      </ElementWrapper>

      <ElementWrapper>
        {types.map((type) => {
          const text = type.replace(/^\w/, (c) => c.toUpperCase());
          return (
            <ElementWrapper key={type}>
              <Button elementColor={type} elementStyle='outline' loading>{text}</Button>
            </ElementWrapper>
          );
        })}
      </ElementWrapper>

      <ElementWrapper>
        {types.map((type) => {
          const text = type.replace(/^\w/, (c) => c.toUpperCase());
          return (
            <ElementWrapper key={type}>
              <Button elementColor={type} elementStyle='dashed'>{text}</Button>
            </ElementWrapper>
          );
        })}
      </ElementWrapper>

      <ElementWrapper>
        {types.map((type) => {
          const text = type.replace(/^\w/, (c) => c.toUpperCase());
          return (
            <ElementWrapper key={type}>
              <Button elementColor={type} elementStyle='dashed' loading>{text}</Button>
            </ElementWrapper>
          );
        })}
      </ElementWrapper>

      <ElementWrapper>
        {types.map((type) => {
          const text = type.replace(/^\w/, (c) => c.toUpperCase());
          return (
            <ElementWrapper key={type}>
              <Button elementColor={type} elementStyle='subtle'>{text}</Button>
            </ElementWrapper>
          );
        })}
      </ElementWrapper>

      <ElementWrapper>
        {types.map((type) => {
          const text = type.replace(/^\w/, (c) => c.toUpperCase());
          return (
            <ElementWrapper key={type}>
              <Button elementColor={type} elementStyle='subtle' loading>{text}</Button>
            </ElementWrapper>
          );
        })}
      </ElementWrapper>

      <ElementWrapper>
        {types.map((type) => {
          const text = type.replace(/^\w/, (c) => c.toUpperCase());
          return (
            <ElementWrapper key={type}>
              <Button elementColor={type} disabled>{text}</Button>
            </ElementWrapper>
          );
        })}
      </ElementWrapper>

      <ElementWrapper>
        {types.map((type) => {
          const text = type.replace(/^\w/, (c) => c.toUpperCase());
          return (
            <ElementWrapper key={type}>
              <Button elementColor={type} disabled loading>{text}</Button>
            </ElementWrapper>
          );
        })}
      </ElementWrapper>

      <ElementWrapper>
        <ElementWrapper>
          <Button>
            <div style={{width: 16, height: 16, marginRight: '0.8rem'}}>
              <FontAwesomeIcon icon={['far', 'sun']} />
            </div>
            Morning
          </Button>
        </ElementWrapper>
        <ElementWrapper>
          <Button elementStyle='dashed'>
            <div style={{width: 16, height: 16, marginRight: '0.8rem'}}>
              <FontAwesomeIcon icon='shield-alt' />
            </div>
            Defend
          </Button>
        </ElementWrapper>
        <ElementWrapper>
          <div style={{width: 150}}>
            <Button>
              Open very long labeled button
              <div style={{width: 16, height: 16, marginLeft: '0.8rem'}}>
                <FontAwesomeIcon icon='chevron-down' />
              </div>
            </Button>
          </div>
        </ElementWrapper>
      </ElementWrapper>

      <ElementWrapper>
        <div style={{width: '100%', margin: 4}}>
          <Button block>
            Block
          </Button>
        </div>
      </ElementWrapper>

      <ElementWrapper>
        {types.map((type) => (
          <ElementWrapper key={type}>
            <ButtonGroup direction='vertical'>
              <Button elementColor={type}>Text 1</Button>
              <Button elementColor={type}>Text 2</Button>
              <Button elementColor={type}>Text 3</Button>
              <Button elementColor={type}>Text 4</Button>
              <Button elementColor={type}>Text 5</Button>
            </ButtonGroup>
          </ElementWrapper>
        ))}
      </ElementWrapper>

      <ElementWrapper>
        {types.map((type) => (
          <ElementWrapper key={type}>
            <ButtonGroup direction='vertical'>
              <Button elementColor={type} elementStyle='outline'>Text 1</Button>
              <Button elementColor={type} elementStyle='outline'>Text 2</Button>
              <Button elementColor={type} elementStyle='outline'>Text 3</Button>
              <Button elementColor={type} elementStyle='outline'>Text 4</Button>
              <Button elementColor={type} elementStyle='outline'>Text 5</Button>
            </ButtonGroup>
          </ElementWrapper>
        ))}
      </ElementWrapper>

      <ElementWrapper styles={{flexDirection: 'column'}}>
        {types.map((type) => (
          <ElementWrapper key={type}>
            <ButtonGroup>
              <Button elementColor={type}>Text 1</Button>
              <Button elementColor={type}>Text 2</Button>
              <Button elementColor={type}>Text 3</Button>
              <Button elementColor={type}>Text 4</Button>
              <Button elementColor={type}>Text 5</Button>
            </ButtonGroup>
          </ElementWrapper>
        ))}
      </ElementWrapper>

      <ElementWrapper styles={{flexDirection: 'column'}}>
        {types.map((type) => (
          <ElementWrapper key={type}>
            <ButtonGroup>
              <Button elementColor={type} elementStyle='outline'>Text 1</Button>
              <Button elementColor={type} elementStyle='outline'>Text 2</Button>
              <Button elementColor={type} elementStyle='outline'>Text 3</Button>
              <Button elementColor={type} elementStyle='outline'>Text 4</Button>
              <Button elementColor={type} elementStyle='outline'>Text 5</Button>
            </ButtonGroup>
          </ElementWrapper>
        ))}
      </ElementWrapper>
    </div>
  );
};


export default buttons;
