import React, { FC, memo } from 'react';
import EmailCheckOutlineSvg from '../svg/email-check-outline.svg';

export interface IEmailCheckOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const EmailCheckOutlineIcon: FC<IEmailCheckOutlineIconProps> = memo(props => {
  return <EmailCheckOutlineSvg {...props} />;
});
