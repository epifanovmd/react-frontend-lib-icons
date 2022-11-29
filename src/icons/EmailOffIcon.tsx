import React, { FC, memo } from 'react';
import EmailOffSvg from '../svg/email-off.svg';

export interface IEmailOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const EmailOffIcon: FC<IEmailOffIconProps> = memo(props => {
  return <EmailOffSvg {...props} />;
});
