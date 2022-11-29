import React, { FC, memo } from 'react';
import EmailLockSvg from '../svg/email-lock.svg';

export interface IEmailLockIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const EmailLockIcon: FC<IEmailLockIconProps> = memo(props => {
  return <EmailLockSvg {...props} />;
});
