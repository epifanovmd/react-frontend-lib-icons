import React, { FC, memo } from 'react';
import TrophyBrokenSvg from '../svg/trophy-broken.svg';

export interface ITrophyBrokenIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TrophyBrokenIcon: FC<ITrophyBrokenIconProps> = memo(props => {
  return <TrophyBrokenSvg {...props} />;
});
