import React, { FC, memo } from 'react';
import MailboxSvg from '../svg/mailbox.svg';

export interface IMailboxIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MailboxIcon: FC<IMailboxIconProps> = memo(props => {
  return <MailboxSvg {...props} />;
});
