import React, { FC, memo } from 'react';
import TrophyAwardSvg from '../svg/trophy-award.svg';

export interface ITrophyAwardIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TrophyAwardIcon: FC<ITrophyAwardIconProps> = memo(props => {
  return <TrophyAwardSvg {...props} />;
});
