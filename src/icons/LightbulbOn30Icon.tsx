import React, { FC, memo } from 'react';
import LightbulbOn30Svg from '../svg/lightbulb-on-30.svg';

export interface ILightbulbOn30IconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const LightbulbOn30Icon: FC<ILightbulbOn30IconProps> = memo(props => {
  return <LightbulbOn30Svg {...props} />;
});
