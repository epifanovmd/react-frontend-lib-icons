import React, { FC, memo } from 'react';
import PodiumSilverSvg from '../svg/podium-silver.svg';

export interface IPodiumSilverIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PodiumSilverIcon: FC<IPodiumSilverIconProps> = memo(props => {
  return <PodiumSilverSvg {...props} />;
});
