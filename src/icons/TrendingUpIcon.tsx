import React, { FC, memo } from 'react';
import TrendingUpSvg from '../svg/trending-up.svg';

export interface ITrendingUpIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TrendingUpIcon: FC<ITrendingUpIconProps> = memo(props => {
  return <TrendingUpSvg {...props} />;
});
