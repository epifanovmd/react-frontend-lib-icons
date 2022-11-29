import React, { FC, memo } from 'react';
import LightbulbOn40Svg from '../svg/lightbulb-on-40.svg';

export interface ILightbulbOn40IconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const LightbulbOn40Icon: FC<ILightbulbOn40IconProps> = memo(props => {
  return <LightbulbOn40Svg {...props} />;
});
