import React, { FC, memo } from 'react';
import HomeLightningBoltSvg from '../svg/home-lightning-bolt.svg';

export interface IHomeLightningBoltIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HomeLightningBoltIcon: FC<IHomeLightningBoltIconProps> = memo(props => {
  return <HomeLightningBoltSvg {...props} />;
});
