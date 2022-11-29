import React, { FC, memo } from 'react';
import MailboxOutlineSvg from '../svg/mailbox-outline.svg';

export interface IMailboxOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MailboxOutlineIcon: FC<IMailboxOutlineIconProps> = memo(props => {
  return <MailboxOutlineSvg {...props} />;
});
