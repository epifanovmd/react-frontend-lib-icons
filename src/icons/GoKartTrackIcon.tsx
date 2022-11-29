import React, { FC, memo } from 'react';
import GoKartTrackSvg from '../svg/go-kart-track.svg';

export interface IGoKartTrackIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const GoKartTrackIcon: FC<IGoKartTrackIconProps> = memo(props => {
  return <GoKartTrackSvg {...props} />;
});
