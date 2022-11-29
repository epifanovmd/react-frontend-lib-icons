import React, { FC, memo } from 'react';
import LightningBoltOutlineSvg from '../svg/lightning-bolt-outline.svg';

export interface ILightningBoltOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const LightningBoltOutlineIcon: FC<ILightningBoltOutlineIconProps> = memo(props => {
  return <LightningBoltOutlineSvg {...props} />;
});
