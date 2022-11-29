import React, { FC, memo } from 'react';
import HandshakeSvg from '../svg/handshake.svg';

export interface IHandshakeIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HandshakeIcon: FC<IHandshakeIconProps> = memo(props => {
  return <HandshakeSvg {...props} />;
});
