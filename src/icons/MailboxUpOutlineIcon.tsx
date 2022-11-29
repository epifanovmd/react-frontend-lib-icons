import React, { FC, memo } from 'react';
import MailboxUpOutlineSvg from '../svg/mailbox-up-outline.svg';

export interface IMailboxUpOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MailboxUpOutlineIcon: FC<IMailboxUpOutlineIconProps> = memo(props => {
  return <MailboxUpOutlineSvg {...props} />;
});
