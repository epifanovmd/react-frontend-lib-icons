import React, { FC, memo } from 'react';
import XmppSvg from '../svg/xmpp.svg';

export interface IXmppIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const XmppIcon: FC<IXmppIconProps> = memo(props => {
  return <XmppSvg {...props} />;
});
