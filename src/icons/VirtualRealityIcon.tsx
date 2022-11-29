import React, { FC, memo } from 'react';
import VirtualRealitySvg from '../svg/virtual-reality.svg';

export interface IVirtualRealityIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const VirtualRealityIcon: FC<IVirtualRealityIconProps> = memo(props => {
  return <VirtualRealitySvg {...props} />;
});
