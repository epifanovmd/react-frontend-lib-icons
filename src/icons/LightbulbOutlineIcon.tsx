import React, { FC, memo } from 'react';
import LightbulbOutlineSvg from '../svg/lightbulb-outline.svg';

export interface ILightbulbOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const LightbulbOutlineIcon: FC<ILightbulbOutlineIconProps> = memo(props => {
  return <LightbulbOutlineSvg {...props} />;
});
