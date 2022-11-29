import React, { FC, memo } from 'react';
import EmailFastSvg from '../svg/email-fast.svg';

export interface IEmailFastIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const EmailFastIcon: FC<IEmailFastIconProps> = memo(props => {
  return <EmailFastSvg {...props} />;
});
