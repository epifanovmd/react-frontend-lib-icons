import React, { FC, memo } from 'react';
import PodiumBronzeSvg from '../svg/podium-bronze.svg';

export interface IPodiumBronzeIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PodiumBronzeIcon: FC<IPodiumBronzeIconProps> = memo(props => {
  return <PodiumBronzeSvg {...props} />;
});
