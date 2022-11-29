import React, { FC, memo } from 'react';
import EmailAlertOutlineSvg from '../svg/email-alert-outline.svg';

export interface IEmailAlertOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const EmailAlertOutlineIcon: FC<IEmailAlertOutlineIconProps> = memo(props => {
  return <EmailAlertOutlineSvg {...props} />;
});
