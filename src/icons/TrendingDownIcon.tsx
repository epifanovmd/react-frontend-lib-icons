import React, { FC, memo } from 'react';
import TrendingDownSvg from '../svg/trending-down.svg';

export interface ITrendingDownIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TrendingDownIcon: FC<ITrendingDownIconProps> = memo(props => {
  return <TrendingDownSvg {...props} />;
});
