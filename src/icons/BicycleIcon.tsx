import React, { FC, memo } from 'react';
import BicycleSvg from '../svg/bicycle.svg';

export interface IBicycleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BicycleIcon: FC<IBicycleIconProps> = memo(props => {
  return <BicycleSvg {...props} />;
});
