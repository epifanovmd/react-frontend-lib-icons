import React, { FC, memo } from 'react';
import LightbulbMultipleOutlineSvg from '../svg/lightbulb-multiple-outline.svg';

export interface ILightbulbMultipleOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const LightbulbMultipleOutlineIcon: FC<ILightbulbMultipleOutlineIconProps> = memo(props => {
  return <LightbulbMultipleOutlineSvg {...props} />;
});
