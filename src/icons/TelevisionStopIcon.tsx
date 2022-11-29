import React, { FC, memo } from 'react';
import TelevisionStopSvg from '../svg/television-stop.svg';

export interface ITelevisionStopIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TelevisionStopIcon: FC<ITelevisionStopIconProps> = memo(props => {
  return <TelevisionStopSvg {...props} />;
});
