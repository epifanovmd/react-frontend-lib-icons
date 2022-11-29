import React, { FC, memo } from 'react';
import SkiSvg from '../svg/ski.svg';

export interface ISkiIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SkiIcon: FC<ISkiIconProps> = memo(props => {
  return <SkiSvg {...props} />;
});
