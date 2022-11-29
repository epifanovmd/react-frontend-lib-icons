import React, { FC, memo } from 'react';
import EmailAlertSvg from '../svg/email-alert.svg';

export interface IEmailAlertIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const EmailAlertIcon: FC<IEmailAlertIconProps> = memo(props => {
  return <EmailAlertSvg {...props} />;
});
