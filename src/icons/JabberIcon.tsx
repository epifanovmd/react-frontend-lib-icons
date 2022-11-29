import React, { FC, memo } from 'react';
import JabberSvg from '../svg/jabber.svg';

export interface IJabberIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const JabberIcon: FC<IJabberIconProps> = memo(props => {
  return <JabberSvg {...props} />;
});
