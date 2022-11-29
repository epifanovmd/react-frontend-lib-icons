import React, { FC, memo } from 'react';
import LightningBoltCircleSvg from '../svg/lightning-bolt-circle.svg';

export interface ILightningBoltCircleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const LightningBoltCircleIcon: FC<ILightningBoltCircleIconProps> = memo(props => {
  return <LightningBoltCircleSvg {...props} />;
});
