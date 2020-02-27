import React from 'react';
import ElementWrapper from '../components/Wrapper';
import {Button, ButtonGroup} from '@emblem-ui/core';

const buttons = () => {
  const types = ['primary', 'secondary', 'success', 'info', 'warning', 'danger', 'dark'];

  return (
    <div>
      <ElementWrapper>
        <div style={{backgroundColor: '#eee', width: 200, height: 200, padding: 10}}>
          <Button color='primary'>Shadow test</Button>
        </div>
      </ElementWrapper>
      <ElementWrapper>
        {types.map((type) => {
          const text = type.replace(/^\w/, c => c.toUpperCase());
          return (
            <ElementWrapper key={type}>
              <Button color={type} size='small'>{text}</Button>
            </ElementWrapper>
          );
        })}
      </ElementWrapper>

      <ElementWrapper>
        {types.map((type) => {
          const text = type.replace(/^\w/, c => c.toUpperCase());
          return (
            <ElementWrapper key={type}>
              <Button color={type} size='default'>{text}</Button>
            </ElementWrapper>
          );
        })}
      </ElementWrapper>

      <ElementWrapper>
        {types.map((type) => {
          const text = type.replace(/^\w/, c => c.toUpperCase());
          return (
            <ElementWrapper key={type}>
              <Button color={type} size='large'>{text}</Button>
            </ElementWrapper>
          );
        })}
      </ElementWrapper>

      <ElementWrapper>
        {types.map((type) => {
          const text = type.replace(/^\w/, c => c.toUpperCase());
          return (
            <ElementWrapper key={type}>
              <Button color={type} isLoading>{text}</Button>
            </ElementWrapper>
          );
        })}
      </ElementWrapper>

      <ElementWrapper>
        {types.map((type) => {
          const text = type.replace(/^\w/, c => c.toUpperCase());
          return (
            <ElementWrapper key={type}>
              <Button color={type} outline>{text}</Button>
            </ElementWrapper>
          );
        })}
      </ElementWrapper>

      <ElementWrapper>
        {types.map((type) => {
          const text = type.replace(/^\w/, c => c.toUpperCase());
          return (
            <ElementWrapper key={type}>
              <Button color={type} outline isLoading>{text}</Button>
            </ElementWrapper>
          );
        })}
      </ElementWrapper>

      <ElementWrapper>
        {types.map((type) => {
          const text = type.replace(/^\w/, c => c.toUpperCase());
          return (
            <ElementWrapper key={type}>
              <Button color={type} isDisabled>{text}</Button>
            </ElementWrapper>
          );
        })}
      </ElementWrapper>

      <ElementWrapper>
        {types.map((type) => {
          const text = type.replace(/^\w/, c => c.toUpperCase());
          return (
            <ElementWrapper key={type}>
              <Button color={type} isDisabled isLoading>{text}</Button>
            </ElementWrapper>
          );
        })}
      </ElementWrapper>

      <ElementWrapper>
        {types.map((type) => {
          return (
            <ElementWrapper key={type}>
              <ButtonGroup direction='vertical'>
                <Button color={type}>Text 1</Button>
                <Button color={type}>Text 2</Button>
                <Button color={type}>Text 3</Button>
                <Button color={type}>Text 4</Button>
                <Button color={type}>Text 5</Button>
              </ButtonGroup>
            </ElementWrapper>
          );
        })}
      </ElementWrapper>

      <ElementWrapper>
        {types.map((type) => {
          return (
            <ElementWrapper key={type}>
              <ButtonGroup direction='vertical'>
                <Button color={type} outline>Text 1</Button>
                <Button color={type} outline>Text 2</Button>
                <Button color={type} outline>Text 3</Button>
                <Button color={type} outline>Text 4</Button>
                <Button color={type} outline>Text 5</Button>
              </ButtonGroup>
            </ElementWrapper>
          );
        })}
      </ElementWrapper>

      <ElementWrapper styles={{flexDirection: 'column'}}>
        {types.map((type) => {
          return (
            <ElementWrapper key={type}>
              <ButtonGroup>
                <Button color={type}>Text 1</Button>
                <Button color={type}>Text 2</Button>
                <Button color={type}>Text 3</Button>
                <Button color={type}>Text 4</Button>
                <Button color={type}>Text 5</Button>
              </ButtonGroup>
            </ElementWrapper>
          );
        })}
      </ElementWrapper>

      <ElementWrapper styles={{flexDirection: 'column'}}>
        {types.map((type) => {
          return (
            <ElementWrapper key={type}>
              <ButtonGroup>
                <Button color={type} outline>Text 1</Button>
                <Button color={type} outline>Text 2</Button>
                <Button color={type} outline>Text 3</Button>
                <Button color={type} outline>Text 4</Button>
                <Button color={type} outline>Text 5</Button>
              </ButtonGroup>
            </ElementWrapper>
          );
        })}
      </ElementWrapper>
    </div>
  );
};


export default buttons;
