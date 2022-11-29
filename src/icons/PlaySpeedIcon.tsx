import React, { FC, memo } from 'react';
import PlaySpeedSvg from '../svg/play-speed.svg';

export interface IPlaySpeedIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PlaySpeedIcon: FC<IPlaySpeedIconProps> = memo(props => {
  return <PlaySpeedSvg {...props} />;
});
