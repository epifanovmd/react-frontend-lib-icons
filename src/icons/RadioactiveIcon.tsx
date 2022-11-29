import React, { FC, memo } from 'react';
import RadioactiveSvg from '../svg/radioactive.svg';

export interface IRadioactiveIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const RadioactiveIcon: FC<IRadioactiveIconProps> = memo(props => {
  return <RadioactiveSvg {...props} />;
});
