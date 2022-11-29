import React, { FC, memo } from 'react';
import EmailLockOutlineSvg from '../svg/email-lock-outline.svg';

export interface IEmailLockOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const EmailLockOutlineIcon: FC<IEmailLockOutlineIconProps> = memo(props => {
  return <EmailLockOutlineSvg {...props} />;
});
