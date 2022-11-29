import React, { FC, memo } from 'react';
import MailboxOpenOutlineSvg from '../svg/mailbox-open-outline.svg';

export interface IMailboxOpenOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MailboxOpenOutlineIcon: FC<IMailboxOpenOutlineIconProps> = memo(props => {
  return <MailboxOpenOutlineSvg {...props} />;
});
