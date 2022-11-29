import React, { FC, memo } from 'react';
import SendLockSvg from '../svg/send-lock.svg';

export interface ISendLockIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SendLockIcon: FC<ISendLockIconProps> = memo(props => {
  return <SendLockSvg {...props} />;
});
