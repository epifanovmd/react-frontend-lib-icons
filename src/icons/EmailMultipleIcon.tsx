import React, { FC, memo } from 'react';
import EmailMultipleSvg from '../svg/email-multiple.svg';

export interface IEmailMultipleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const EmailMultipleIcon: FC<IEmailMultipleIconProps> = memo(props => {
  return <EmailMultipleSvg {...props} />;
});
