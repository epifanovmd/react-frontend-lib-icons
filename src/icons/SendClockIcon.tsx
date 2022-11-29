import React, { FC, memo } from 'react';
import SendClockSvg from '../svg/send-clock.svg';

export interface ISendClockIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SendClockIcon: FC<ISendClockIconProps> = memo(props => {
  return <SendClockSvg {...props} />;
});
