import React, { FC, memo } from 'react';
import EmailPlusSvg from '../svg/email-plus.svg';

export interface IEmailPlusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const EmailPlusIcon: FC<IEmailPlusIconProps> = memo(props => {
  return <EmailPlusSvg {...props} />;
});
