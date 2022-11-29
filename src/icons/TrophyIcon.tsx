import React, { FC, memo } from 'react';
import TrophySvg from '../svg/trophy.svg';

export interface ITrophyIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TrophyIcon: FC<ITrophyIconProps> = memo(props => {
  return <TrophySvg {...props} />;
});
