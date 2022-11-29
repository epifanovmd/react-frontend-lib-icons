import React, { FC, memo } from 'react';
import CloseNetworkOutlineSvg from '../svg/close-network-outline.svg';

export interface ICloseNetworkOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CloseNetworkOutlineIcon: FC<ICloseNetworkOutlineIconProps> = memo(props => {
  return <CloseNetworkOutlineSvg {...props} />;
});
