import React, { FC, memo } from 'react';
import LightbulbGroupOffOutlineSvg from '../svg/lightbulb-group-off-outline.svg';

export interface ILightbulbGroupOffOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const LightbulbGroupOffOutlineIcon: FC<ILightbulbGroupOffOutlineIconProps> = memo(props => {
  return <LightbulbGroupOffOutlineSvg {...props} />;
});
