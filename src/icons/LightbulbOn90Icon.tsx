import React, { FC, memo } from 'react';
import LightbulbOn90Svg from '../svg/lightbulb-on-90.svg';

export interface ILightbulbOn90IconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const LightbulbOn90Icon: FC<ILightbulbOn90IconProps> = memo(props => {
  return <LightbulbOn90Svg {...props} />;
});
