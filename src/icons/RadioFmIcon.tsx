import React, { FC, memo } from 'react';
import RadioFmSvg from '../svg/radio-fm.svg';

export interface IRadioFmIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const RadioFmIcon: FC<IRadioFmIconProps> = memo(props => {
  return <RadioFmSvg {...props} />;
});
