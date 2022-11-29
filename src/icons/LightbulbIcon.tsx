import React, { FC, memo } from 'react';
import LightbulbSvg from '../svg/lightbulb.svg';

export interface ILightbulbIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const LightbulbIcon: FC<ILightbulbIconProps> = memo(props => {
  return <LightbulbSvg {...props} />;
});
