import React, { FC, memo } from 'react';
import LightbulbOffOutlineSvg from '../svg/lightbulb-off-outline.svg';

export interface ILightbulbOffOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const LightbulbOffOutlineIcon: FC<ILightbulbOffOutlineIconProps> = memo(props => {
  return <LightbulbOffOutlineSvg {...props} />;
});
