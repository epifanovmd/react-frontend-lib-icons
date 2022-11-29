import React, { FC, memo } from 'react';
import FootballSvg from '../svg/football.svg';

export interface IFootballIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FootballIcon: FC<IFootballIconProps> = memo(props => {
  return <FootballSvg {...props} />;
});
