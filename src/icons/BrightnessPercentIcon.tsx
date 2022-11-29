import React, { FC, memo } from 'react';
import BrightnessPercentSvg from '../svg/brightness-percent.svg';

export interface IBrightnessPercentIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BrightnessPercentIcon: FC<IBrightnessPercentIconProps> = memo(props => {
  return <BrightnessPercentSvg {...props} />;
});
