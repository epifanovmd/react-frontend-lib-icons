import React, { FC, memo } from 'react';
import FootballAustralianSvg from '../svg/football-australian.svg';

export interface IFootballAustralianIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FootballAustralianIcon: FC<IFootballAustralianIconProps> = memo(props => {
  return <FootballAustralianSvg {...props} />;
});
