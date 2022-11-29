import React, { FC, memo } from 'react';
import MulticastSvg from '../svg/multicast.svg';

export interface IMulticastIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MulticastIcon: FC<IMulticastIconProps> = memo(props => {
  return <MulticastSvg {...props} />;
});
