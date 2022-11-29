import React, { FC, memo } from 'react';
import LightbulbOn50Svg from '../svg/lightbulb-on-50.svg';

export interface ILightbulbOn50IconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const LightbulbOn50Icon: FC<ILightbulbOn50IconProps> = memo(props => {
  return <LightbulbOn50Svg {...props} />;
});
