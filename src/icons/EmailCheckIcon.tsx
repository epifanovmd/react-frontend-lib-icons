import React, { FC, memo } from 'react';
import EmailCheckSvg from '../svg/email-check.svg';

export interface IEmailCheckIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const EmailCheckIcon: FC<IEmailCheckIconProps> = memo(props => {
  return <EmailCheckSvg {...props} />;
});
