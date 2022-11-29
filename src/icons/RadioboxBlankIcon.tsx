import React, { FC, memo } from 'react';
import RadioboxBlankSvg from '../svg/radiobox-blank.svg';

export interface IRadioboxBlankIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const RadioboxBlankIcon: FC<IRadioboxBlankIconProps> = memo(props => {
  return <RadioboxBlankSvg {...props} />;
});
