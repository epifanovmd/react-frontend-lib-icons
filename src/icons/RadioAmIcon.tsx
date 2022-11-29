import React, { FC, memo } from 'react';
import RadioAmSvg from '../svg/radio-am.svg';

export interface IRadioAmIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const RadioAmIcon: FC<IRadioAmIconProps> = memo(props => {
  return <RadioAmSvg {...props} />;
});
