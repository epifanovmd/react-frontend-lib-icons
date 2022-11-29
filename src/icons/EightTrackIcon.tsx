import React, { FC, memo } from 'react';
import EightTrackSvg from '../svg/eight-track.svg';

export interface IEightTrackIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const EightTrackIcon: FC<IEightTrackIconProps> = memo(props => {
  return <EightTrackSvg {...props} />;
});
