import React from 'react';
import {EmblemUITheme, useTheme} from '@emblem-ui/styles';

import {
  IconCheck,
  IconCircle,
  IconComponent,
  IconCross,
  IconDiamond,
  IconMinus,
  IconPlus,
  IconSlash,
  IconSquare
} from './Icon.styles';
import {IconType} from '../../interface/element.interface';

interface Icon {
  base?: string;
  isDisabled?: boolean;
  type?: IconType;
}

const Icon: React.FC<Icon> = ({
  base = '16px',
  type,
  isDisabled = false
}) => {
  const theme: EmblemUITheme = useTheme();
  return (
    <IconComponent base={base}>
      {type === 'check' && <IconCheck base={base} isDisabled={isDisabled} theme={theme} />}
      {type === 'plus' && <IconPlus base={base} isDisabled={isDisabled} theme={theme} />}
      {type === 'minus' && <IconMinus base={base} isDisabled={isDisabled} theme={theme} />}
      {type === 'cross' && <IconCross base={base} isDisabled={isDisabled} theme={theme} />}
      {type === 'slash' && <IconSlash base={base} isDisabled={isDisabled} theme={theme} />}
      {type === 'square' && <IconSquare base={base} isDisabled={isDisabled} theme={theme} />}
      {type === 'circle' && <IconCircle base={base} isDisabled={isDisabled} theme={theme} />}
      {type === 'diamond' && <IconDiamond base={base} isDisabled={isDisabled} theme={theme} />}
    </IconComponent>
  );
};

export default Icon;
