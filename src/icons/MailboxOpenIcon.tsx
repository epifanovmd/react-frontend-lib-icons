import React, { FC, memo } from 'react';
import MailboxOpenSvg from '../svg/mailbox-open.svg';

export interface IMailboxOpenIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MailboxOpenIcon: FC<IMailboxOpenIconProps> = memo(props => {
  return <MailboxOpenSvg {...props} />;
});
