import React, { FC, memo } from 'react';
import RadioactiveCircleSvg from '../svg/radioactive-circle.svg';

export interface IRadioactiveCircleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const RadioactiveCircleIcon: FC<IRadioactiveCircleIconProps> = memo(props => {
  return <RadioactiveCircleSvg {...props} />;
});
