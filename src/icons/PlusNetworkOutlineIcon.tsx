import React, { FC, memo } from 'react';
import PlusNetworkOutlineSvg from '../svg/plus-network-outline.svg';

export interface IPlusNetworkOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PlusNetworkOutlineIcon: FC<IPlusNetworkOutlineIconProps> = memo(props => {
  return <PlusNetworkOutlineSvg {...props} />;
});
