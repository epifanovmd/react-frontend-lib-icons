import React, { FC, memo } from 'react';
import FuseBladeSvg from '../svg/fuse-blade.svg';

export interface IFuseBladeIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FuseBladeIcon: FC<IFuseBladeIconProps> = memo(props => {
  return <FuseBladeSvg {...props} />;
});
