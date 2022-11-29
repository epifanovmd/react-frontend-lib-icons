import React, { FC, memo } from 'react';
import MailboxOpenUpOutlineSvg from '../svg/mailbox-open-up-outline.svg';

export interface IMailboxOpenUpOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MailboxOpenUpOutlineIcon: FC<IMailboxOpenUpOutlineIconProps> = memo(props => {
  return <MailboxOpenUpOutlineSvg {...props} />;
});
