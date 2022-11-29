import React, { FC, memo } from 'react';
import SendClockOutlineSvg from '../svg/send-clock-outline.svg';

export interface ISendClockOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SendClockOutlineIcon: FC<ISendClockOutlineIconProps> = memo(props => {
  return <SendClockOutlineSvg {...props} />;
});
