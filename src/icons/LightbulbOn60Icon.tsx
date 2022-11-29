import React, { FC, memo } from 'react';
import LightbulbOn60Svg from '../svg/lightbulb-on-60.svg';

export interface ILightbulbOn60IconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const LightbulbOn60Icon: FC<ILightbulbOn60IconProps> = memo(props => {
  return <LightbulbOn60Svg {...props} />;
});
