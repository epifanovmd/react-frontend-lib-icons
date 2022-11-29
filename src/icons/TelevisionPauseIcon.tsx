import React, { FC, memo } from 'react';
import TelevisionPauseSvg from '../svg/television-pause.svg';

export interface ITelevisionPauseIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TelevisionPauseIcon: FC<ITelevisionPauseIconProps> = memo(props => {
  return <TelevisionPauseSvg {...props} />;
});
