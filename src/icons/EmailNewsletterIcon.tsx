import React, { FC, memo } from 'react';
import EmailNewsletterSvg from '../svg/email-newsletter.svg';

export interface IEmailNewsletterIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const EmailNewsletterIcon: FC<IEmailNewsletterIconProps> = memo(props => {
  return <EmailNewsletterSvg {...props} />;
});
