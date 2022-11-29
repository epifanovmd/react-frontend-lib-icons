import React, { FC, memo } from 'react';
import LightbulbMultipleOffSvg from '../svg/lightbulb-multiple-off.svg';

export interface ILightbulbMultipleOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const LightbulbMultipleOffIcon: FC<ILightbulbMultipleOffIconProps> = memo(props => {
  return <LightbulbMultipleOffSvg {...props} />;
});
