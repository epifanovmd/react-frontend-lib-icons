import React, { FC, memo } from 'react';
import EmailOpenSvg from '../svg/email-open.svg';

export interface IEmailOpenIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const EmailOpenIcon: FC<IEmailOpenIconProps> = memo(props => {
  return <EmailOpenSvg {...props} />;
});
