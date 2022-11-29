import React, { FC, memo } from 'react';
import CallMissedSvg from '../svg/call-missed.svg';

export interface ICallMissedIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CallMissedIcon: FC<ICallMissedIconProps> = memo(props => {
  return <CallMissedSvg {...props} />;
});
