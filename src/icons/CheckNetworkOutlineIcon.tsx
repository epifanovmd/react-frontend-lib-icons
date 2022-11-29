import React, { FC, memo } from 'react';
import CheckNetworkOutlineSvg from '../svg/check-network-outline.svg';

export interface ICheckNetworkOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CheckNetworkOutlineIcon: FC<ICheckNetworkOutlineIconProps> = memo(props => {
  return <CheckNetworkOutlineSvg {...props} />;
});
