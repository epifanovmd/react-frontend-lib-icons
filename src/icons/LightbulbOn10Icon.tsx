import React, { FC, memo } from 'react';
import LightbulbOn10Svg from '../svg/lightbulb-on-10.svg';

export interface ILightbulbOn10IconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const LightbulbOn10Icon: FC<ILightbulbOn10IconProps> = memo(props => {
  return <LightbulbOn10Svg {...props} />;
});
