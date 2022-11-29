import React, { FC, memo } from 'react';
import RadioactiveOffSvg from '../svg/radioactive-off.svg';

export interface IRadioactiveOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const RadioactiveOffIcon: FC<IRadioactiveOffIconProps> = memo(props => {
  return <RadioactiveOffSvg {...props} />;
});
