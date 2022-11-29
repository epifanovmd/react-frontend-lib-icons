import React, { FC, memo } from 'react';
import TrendingNeutralSvg from '../svg/trending-neutral.svg';

export interface ITrendingNeutralIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TrendingNeutralIcon: FC<ITrendingNeutralIconProps> = memo(props => {
  return <TrendingNeutralSvg {...props} />;
});
