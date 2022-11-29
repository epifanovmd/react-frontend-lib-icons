import React, { FC, memo } from 'react';
import EmailSealSvg from '../svg/email-seal.svg';

export interface IEmailSealIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const EmailSealIcon: FC<IEmailSealIconProps> = memo(props => {
  return <EmailSealSvg {...props} />;
});
