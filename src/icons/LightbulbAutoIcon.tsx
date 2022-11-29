import React, { FC, memo } from 'react';
import LightbulbAutoSvg from '../svg/lightbulb-auto.svg';

export interface ILightbulbAutoIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const LightbulbAutoIcon: FC<ILightbulbAutoIconProps> = memo(props => {
  return <LightbulbAutoSvg {...props} />;
});
