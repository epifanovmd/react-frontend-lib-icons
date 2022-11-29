import React, { FC, memo } from 'react';
import MailboxUpSvg from '../svg/mailbox-up.svg';

export interface IMailboxUpIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MailboxUpIcon: FC<IMailboxUpIconProps> = memo(props => {
  return <MailboxUpSvg {...props} />;
});
