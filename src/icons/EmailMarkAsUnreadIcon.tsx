import React, { FC, memo } from 'react';
import EmailMarkAsUnreadSvg from '../svg/email-mark-as-unread.svg';

export interface IEmailMarkAsUnreadIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const EmailMarkAsUnreadIcon: FC<IEmailMarkAsUnreadIconProps> = memo(props => {
  return <EmailMarkAsUnreadSvg {...props} />;
});
