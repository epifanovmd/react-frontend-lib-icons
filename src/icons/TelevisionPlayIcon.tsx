import React, { FC, memo } from 'react';
import TelevisionPlaySvg from '../svg/television-play.svg';

export interface ITelevisionPlayIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TelevisionPlayIcon: FC<ITelevisionPlayIconProps> = memo(props => {
  return <TelevisionPlaySvg {...props} />;
});
