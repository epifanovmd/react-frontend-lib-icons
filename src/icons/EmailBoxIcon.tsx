import React, { FC, memo } from 'react';
import EmailBoxSvg from '../svg/email-box.svg';

export interface IEmailBoxIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const EmailBoxIcon: FC<IEmailBoxIconProps> = memo(props => {
  return <EmailBoxSvg {...props} />;
});
