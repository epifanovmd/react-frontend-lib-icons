import React, { FC, memo } from 'react';
import MinusNetworkOutlineSvg from '../svg/minus-network-outline.svg';

export interface IMinusNetworkOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MinusNetworkOutlineIcon: FC<IMinusNetworkOutlineIconProps> = memo(props => {
  return <MinusNetworkOutlineSvg {...props} />;
});
