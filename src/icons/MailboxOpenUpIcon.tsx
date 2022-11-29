import React, { FC, memo } from 'react';
import MailboxOpenUpSvg from '../svg/mailbox-open-up.svg';

export interface IMailboxOpenUpIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MailboxOpenUpIcon: FC<IMailboxOpenUpIconProps> = memo(props => {
  return <MailboxOpenUpSvg {...props} />;
});
