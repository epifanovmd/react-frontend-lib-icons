import React, { FC, memo } from 'react';
import LightbulbMultipleOffOutlineSvg from '../svg/lightbulb-multiple-off-outline.svg';

export interface ILightbulbMultipleOffOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const LightbulbMultipleOffOutlineIcon: FC<ILightbulbMultipleOffOutlineIconProps> = memo(props => {
  return <LightbulbMultipleOffOutlineSvg {...props} />;
});
