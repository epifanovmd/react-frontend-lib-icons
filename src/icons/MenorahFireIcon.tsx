import React, { FC, memo } from 'react';
import MenorahFireSvg from '../svg/menorah-fire.svg';

export interface IMenorahFireIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MenorahFireIcon: FC<IMenorahFireIconProps> = memo(props => {
  return <MenorahFireSvg {...props} />;
});
