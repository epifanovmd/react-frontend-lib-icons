import React, { FC, memo } from 'react';
import FootballHelmetSvg from '../svg/football-helmet.svg';

export interface IFootballHelmetIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FootballHelmetIcon: FC<IFootballHelmetIconProps> = memo(props => {
  return <FootballHelmetSvg {...props} />;
});
