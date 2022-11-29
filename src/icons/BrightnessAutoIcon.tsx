import React, { FC, memo } from 'react';
import BrightnessAutoSvg from '../svg/brightness-auto.svg';

export interface IBrightnessAutoIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BrightnessAutoIcon: FC<IBrightnessAutoIconProps> = memo(props => {
  return <BrightnessAutoSvg {...props} />;
});
