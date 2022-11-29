import React, { FC, memo } from 'react';
import EmailSvg from '../svg/email.svg';

export interface IEmailIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const EmailIcon: FC<IEmailIconProps> = memo(props => {
  return <EmailSvg {...props} />;
});
