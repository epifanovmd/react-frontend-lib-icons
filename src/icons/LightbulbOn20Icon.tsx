import React, { FC, memo } from 'react';
import LightbulbOn20Svg from '../svg/lightbulb-on-20.svg';

export interface ILightbulbOn20IconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const LightbulbOn20Icon: FC<ILightbulbOn20IconProps> = memo(props => {
  return <LightbulbOn20Svg {...props} />;
});
