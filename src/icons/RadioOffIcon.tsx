import React, { FC, memo } from 'react';
import RadioOffSvg from '../svg/radio-off.svg';

export interface IRadioOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const RadioOffIcon: FC<IRadioOffIconProps> = memo(props => {
  return <RadioOffSvg {...props} />;
});
