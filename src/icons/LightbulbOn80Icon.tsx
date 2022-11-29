import React, { FC, memo } from 'react';
import LightbulbOn80Svg from '../svg/lightbulb-on-80.svg';

export interface ILightbulbOn80IconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const LightbulbOn80Icon: FC<ILightbulbOn80IconProps> = memo(props => {
  return <LightbulbOn80Svg {...props} />;
});
