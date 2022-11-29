import React, { FC, memo } from 'react';
import HandshakeOutlineSvg from '../svg/handshake-outline.svg';

export interface IHandshakeOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HandshakeOutlineIcon: FC<IHandshakeOutlineIconProps> = memo(props => {
  return <HandshakeOutlineSvg {...props} />;
});
