import React, { FC, memo } from 'react';
import TunnelOutlineSvg from '../svg/tunnel-outline.svg';

export interface ITunnelOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TunnelOutlineIcon: FC<ITunnelOutlineIconProps> = memo(props => {
  return <TunnelOutlineSvg {...props} />;
});
