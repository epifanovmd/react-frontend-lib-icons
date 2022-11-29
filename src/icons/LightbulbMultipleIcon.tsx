import React, { FC, memo } from 'react';
import LightbulbMultipleSvg from '../svg/lightbulb-multiple.svg';

export interface ILightbulbMultipleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const LightbulbMultipleIcon: FC<ILightbulbMultipleIconProps> = memo(props => {
  return <LightbulbMultipleSvg {...props} />;
});
