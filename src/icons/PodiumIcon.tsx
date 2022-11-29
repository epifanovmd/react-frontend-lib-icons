import React, { FC, memo } from 'react';
import PodiumSvg from '../svg/podium.svg';

export interface IPodiumIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PodiumIcon: FC<IPodiumIconProps> = memo(props => {
  return <PodiumSvg {...props} />;
});
