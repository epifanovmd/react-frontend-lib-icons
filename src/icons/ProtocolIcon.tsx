import React, { FC, memo } from 'react';
import ProtocolSvg from '../svg/protocol.svg';

export interface IProtocolIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ProtocolIcon: FC<IProtocolIconProps> = memo(props => {
  return <ProtocolSvg {...props} />;
});
