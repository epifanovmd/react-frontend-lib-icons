import React, { FC, memo } from 'react';
import MailSvg from '../svg/mail.svg';

export interface IMailIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MailIcon: FC<IMailIconProps> = memo(props => {
  return <MailSvg {...props} />;
});
