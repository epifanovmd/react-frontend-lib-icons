import React, { FC, memo } from 'react';
import SkiWaterSvg from '../svg/ski-water.svg';

export interface ISkiWaterIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SkiWaterIcon: FC<ISkiWaterIconProps> = memo(props => {
  return <SkiWaterSvg {...props} />;
});
