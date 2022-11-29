import React, { FC, memo } from 'react';
import LightbulbOnOutlineSvg from '../svg/lightbulb-on-outline.svg';

export interface ILightbulbOnOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const LightbulbOnOutlineIcon: FC<ILightbulbOnOutlineIconProps> = memo(props => {
  return <LightbulbOnOutlineSvg {...props} />;
});
