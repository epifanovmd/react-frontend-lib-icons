import React, { FC, memo } from 'react';
import SoccerSvg from '../svg/soccer.svg';

export interface ISoccerIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SoccerIcon: FC<ISoccerIconProps> = memo(props => {
  return <SoccerSvg {...props} />;
});
