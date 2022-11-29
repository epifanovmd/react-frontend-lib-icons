import React, { FC, memo } from 'react';
import PodiumGoldSvg from '../svg/podium-gold.svg';

export interface IPodiumGoldIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PodiumGoldIcon: FC<IPodiumGoldIconProps> = memo(props => {
  return <PodiumGoldSvg {...props} />;
});
