import React, { FC, memo } from 'react';
import RadioSvg from '../svg/radio.svg';

export interface IRadioIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const RadioIcon: FC<IRadioIconProps> = memo(props => {
  return <RadioSvg {...props} />;
});
