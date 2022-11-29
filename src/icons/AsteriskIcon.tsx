import React, { FC, memo } from 'react';
import AsteriskSvg from '../svg/asterisk.svg';

export interface IAsteriskIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AsteriskIcon: FC<IAsteriskIconProps> = memo(props => {
  return <AsteriskSvg {...props} />;
});
