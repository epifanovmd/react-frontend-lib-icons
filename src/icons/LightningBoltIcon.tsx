import React, { FC, memo } from 'react';
import LightningBoltSvg from '../svg/lightning-bolt.svg';

export interface ILightningBoltIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const LightningBoltIcon: FC<ILightningBoltIconProps> = memo(props => {
  return <LightningBoltSvg {...props} />;
});
