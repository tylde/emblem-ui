import React from 'react';
import {Checkbox, FormRow, Switch, TextInput} from '@emblem-ui/form';

import useToggle from '../hooks/useToggle';
import useInput from '../hooks/useInput';

const FormPage = () => {
  const [checkboxValue1, setCheckbox1] = useToggle(false);
  const [checkboxValue2, setCheckbox2] = useToggle(false);
  const [checkboxValue3, setCheckbox3] = useToggle(false);
  const [checkboxValue4, setCheckbox4] = useToggle(false);
  const [checkboxValue5, setCheckbox5] = useToggle(false);
  const [checkboxValue6, setCheckbox6] = useToggle(false);
  const [checkboxValue7, setCheckbox7] = useToggle(false);
  const [checkboxValue8, setCheckbox8] = useToggle(false);
  const [checkboxValue9, setCheckbox9] = useToggle(false);
  const [checkboxValue10, setCheckbox10] = useToggle(false);

  const [switchValue1, setSwitch1] = useToggle(false);
  const [switchValue2, setSwitch2] = useToggle(false);
  const [switchValue3, setSwitch3] = useToggle(false);
  const [switchValue4, setSwitch4] = useToggle(false);
  const [switchValue5, setSwitch5] = useToggle(false);
  const [switchValue6, setSwitch6] = useToggle(false);

  const [inputValue1, setInput1] = useInput('');

  return (
    <div>
      <FormRow>
        <span style={{marginRight: 24}}>
          <Checkbox
            checked={checkboxValue1}
            checkedText='Option 1'
            componentId='chekbox-1'
            onChange={setCheckbox1}
          />
        </span>
        <span style={{marginRight: 24}}>
          <Checkbox
            checked={checkboxValue2}
            checkedText='Option 2'
            componentId='chekbox-2'
            onChange={setCheckbox2}
            elementColor='secondary'
          />
        </span>
        <span style={{marginRight: 24}}>
          <Checkbox
            checked={checkboxValue3}
            checkedText='Option 3'
            componentId='chekbox-3'
            onChange={setCheckbox3}
            elementColor='danger'
          />
        </span>
        <span style={{marginRight: 24}}>
          <Checkbox
            checked={checkboxValue4}
            checkedText='Option 4'
            componentId='chekbox-4'
            onChange={setCheckbox4}
            elementColor='warning'
          />
        </span>
        <span style={{marginRight: 24}}>
          <Checkbox
            checked={checkboxValue5}
            checkedText='Option 5'
            componentId='chekbox-5'
            onChange={setCheckbox5}
            elementColor='success'
          />
        </span>
        <span style={{marginRight: 24}}>
          <Checkbox
            checked={checkboxValue6}
            checkedText='Option 6'
            componentId='chekbox-6'
            onChange={setCheckbox6}
            elementColor='dark'
          />
        </span>
        <span style={{marginRight: 24}}>
          <Checkbox
            checked={checkboxValue7}
            checkedText='Option 7'
            componentId='chekbox-7'
            onChange={setCheckbox7}
            elementColor='info'
          />
        </span>
        <span style={{marginRight: 24}}>
          <Checkbox
            checked={checkboxValue8}
            checkedText='Option 8'
            componentId='chekbox-8'
            onChange={setCheckbox8}
            elementColor='info'
            disabled
          />
        </span>
      </FormRow>
      <FormRow>
        <Checkbox
          checked={checkboxValue9}
          checkedText='Etiam eu odio a elit placerat elementum a quis diam.'
          componentId='chekbox-9'
          onChange={setCheckbox9}
          elementColor='dark'
        />
      </FormRow>
      <FormRow>
        <Checkbox
          checked={checkboxValue10}
          checkedText='Mauris ultricies dictum quam quis lobortis.'
          componentId='chekbox-10'
          onChange={setCheckbox10}
          elementColor='dark'
        />
      </FormRow>
      <FormRow>
        <Switch
          checked={switchValue1}
          checkedIcon='check'
          checkedText='Show empty'
          componentId='checkboxx-1'
          icon='cross'
          elementColor='dark'
          onChange={setSwitch1}
        />
      </FormRow>
      <FormRow>
        <Switch
          onChange={setSwitch2}
          checked={switchValue2}
          componentId='checkboxx-2'
          checkedText='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vulputate dignissim nunc, nec semper metus facilisis non. Cras nulla ipsum, elementum ut blandit id, aliquet in purus.'
          elementColor='success'
        />
        <Switch
          onChange={setSwitch3}
          checked={switchValue3}
          componentId='checkboxx-3'
          checkedText='Ut fermentum eleifend augue eget semper.'
          elementColor='success'
        />
        <Switch
          onChange={setSwitch4}
          checked={switchValue4}
          componentId='checkboxx-4'
          elementColor='success'
          checkedText='Donec tincidunt mi ut felis lacinia egestas. Vivamus elementum dolor tincidunt augue iaculis, nec bibendum lectus dignissim.'
        />
      </FormRow>
      <FormRow>
        <Switch
          onChange={setSwitch5}
          checked={switchValue5}
          componentId='checkboxx-5'
          text='Off'
          checkedText='Warning'
          elementColor='warning'
          checkedIcon='slash'
        />
      </FormRow>
      <FormRow>
        <Switch
          onChange={setSwitch6}
          checked={switchValue6}
          componentId='checkboxx-6'
          text='Off'
          checkedText='On'
          elementColor='warning'
          checkedIcon='slash'
          disabled
        />
      </FormRow>
      <FormRow>
        <TextInput
          label='Pellentesque luctus elementum'
          value={inputValue1}
          onChange={setInput1}
          componentId='input-1'
        />
      </FormRow>
      <FormRow>
        <TextInput
          label='Pellentesque luctus elementum'
          value='Lorem ipsum'
          onChange={() => {}}
          componentId='input-disabled'
          disabled
        />
      </FormRow>


    </div>
  );
};

FormPage.propTypes = {};

FormPage.defaultProps = {};

export default FormPage;
