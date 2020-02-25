import React from 'react';
import Wrapper from '../components/Wrapper';
import {Button, ButtonGroup} from '@emblem-ui/core';

const buttons = () => {
  const types = ['primary', 'secondary', 'success', 'info', 'warning', 'danger', 'dark'];

  return (
    <div>
      <Wrapper>
        <div style={{backgroundColor: '#eee', width: 200, height: 200, padding: 10}}>
          <Button color='primary'>Shadow test</Button>
        </div>
      </Wrapper>
      <Wrapper>
        {types.map((type) => {
          const text = type.replace(/^\w/, c => c.toUpperCase());
          return (
            <Wrapper key={type}>
              <Button color={type} size='small'>{text}</Button>
            </Wrapper>
          );
        })}
      </Wrapper>

      <Wrapper>
        {types.map((type) => {
          const text = type.replace(/^\w/, c => c.toUpperCase());
          return (
            <Wrapper key={type}>
              <Button color={type} size='default'>{text}</Button>
            </Wrapper>
          );
        })}
      </Wrapper>

      <Wrapper>
        {types.map((type) => {
          const text = type.replace(/^\w/, c => c.toUpperCase());
          return (
            <Wrapper key={type}>
              <Button color={type} size='large'>{text}</Button>
            </Wrapper>
          );
        })}
      </Wrapper>

      <Wrapper>
        {types.map((type) => {
          const text = type.replace(/^\w/, c => c.toUpperCase());
          return (
            <Wrapper key={type}>
              <Button color={type} isLoading>{text}</Button>
            </Wrapper>
          );
        })}
      </Wrapper>

      <Wrapper>
        {types.map((type) => {
          const text = type.replace(/^\w/, c => c.toUpperCase());
          return (
            <Wrapper key={type}>
              <Button color={type} outline>{text}</Button>
            </Wrapper>
          );
        })}
      </Wrapper>

      <Wrapper>
        {types.map((type) => {
          const text = type.replace(/^\w/, c => c.toUpperCase());
          return (
            <Wrapper key={type}>
              <Button color={type} outline isLoading>{text}</Button>
            </Wrapper>
          );
        })}
      </Wrapper>

      <Wrapper>
        {types.map((type) => {
          const text = type.replace(/^\w/, c => c.toUpperCase());
          return (
            <Wrapper key={type}>
              <Button color={type} isDisabled>{text}</Button>
            </Wrapper>
          );
        })}
      </Wrapper>

      <Wrapper>
        {types.map((type) => {
          const text = type.replace(/^\w/, c => c.toUpperCase());
          return (
            <Wrapper key={type}>
              <Button color={type} isDisabled isLoading>{text}</Button>
            </Wrapper>
          );
        })}
      </Wrapper>

      <Wrapper>
        {types.map((type) => {
          return (
            <Wrapper key={type}>
              <ButtonGroup direction='vertical'>
                <Button color={type}>Text 1</Button>
                <Button color={type}>Text 2</Button>
                <Button color={type}>Text 3</Button>
                <Button color={type}>Text 4</Button>
                <Button color={type}>Text 5</Button>
              </ButtonGroup>
            </Wrapper>
          );
        })}
      </Wrapper>

      <Wrapper>
        {types.map((type) => {
          return (
            <Wrapper key={type}>
              <ButtonGroup direction='vertical'>
                <Button color={type} outline>Text 1</Button>
                <Button color={type} outline>Text 2</Button>
                <Button color={type} outline>Text 3</Button>
                <Button color={type} outline>Text 4</Button>
                <Button color={type} outline>Text 5</Button>
              </ButtonGroup>
            </Wrapper>
          );
        })}
      </Wrapper>

      <Wrapper styles={{flexDirection: 'column'}}>
        {types.map((type) => {
          return (
            <Wrapper key={type}>
              <ButtonGroup>
                <Button color={type}>Text 1</Button>
                <Button color={type}>Text 2</Button>
                <Button color={type}>Text 3</Button>
                <Button color={type}>Text 4</Button>
                <Button color={type}>Text 5</Button>
              </ButtonGroup>
            </Wrapper>
          );
        })}
      </Wrapper>

      <Wrapper styles={{flexDirection: 'column'}}>
        {types.map((type) => {
          return (
            <Wrapper key={type}>
              <ButtonGroup>
                <Button color={type} outline>Text 1</Button>
                <Button color={type} outline>Text 2</Button>
                <Button color={type} outline>Text 3</Button>
                <Button color={type} outline>Text 4</Button>
                <Button color={type} outline>Text 5</Button>
              </ButtonGroup>
            </Wrapper>
          );
        })}
      </Wrapper>
    </div>
  );
};


export default buttons;
