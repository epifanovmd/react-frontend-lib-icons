import React, { FC, memo } from 'react';
import SendLockOutlineSvg from '../svg/send-lock-outline.svg';

export interface ISendLockOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SendLockOutlineIcon: FC<ISendLockOutlineIconProps> = memo(props => {
  return <SendLockOutlineSvg {...props} />;
});
