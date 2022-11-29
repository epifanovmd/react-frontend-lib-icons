import React, { FC, memo } from 'react';
import HomeLightningBoltOutlineSvg from '../svg/home-lightning-bolt-outline.svg';

export interface IHomeLightningBoltOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HomeLightningBoltOutlineIcon: FC<IHomeLightningBoltOutlineIconProps> = memo(props => {
  return <HomeLightningBoltOutlineSvg {...props} />;
});
