import React, { FC, memo } from 'react';
import LightbulbGroupOutlineSvg from '../svg/lightbulb-group-outline.svg';

export interface ILightbulbGroupOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const LightbulbGroupOutlineIcon: FC<ILightbulbGroupOutlineIconProps> = memo(props => {
  return <LightbulbGroupOutlineSvg {...props} />;
});
