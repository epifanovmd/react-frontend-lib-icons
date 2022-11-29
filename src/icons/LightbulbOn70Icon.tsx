import React, { FC, memo } from 'react';
import LightbulbOn70Svg from '../svg/lightbulb-on-70.svg';

export interface ILightbulbOn70IconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const LightbulbOn70Icon: FC<ILightbulbOn70IconProps> = memo(props => {
  return <LightbulbOn70Svg {...props} />;
});
