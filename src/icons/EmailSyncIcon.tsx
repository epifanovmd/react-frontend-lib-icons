import React, { FC, memo } from 'react';
import EmailSyncSvg from '../svg/email-sync.svg';

export interface IEmailSyncIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const EmailSyncIcon: FC<IEmailSyncIconProps> = memo(props => {
  return <EmailSyncSvg {...props} />;
});
