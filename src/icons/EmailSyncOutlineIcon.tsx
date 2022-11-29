import React, { FC, memo } from 'react';
import EmailSyncOutlineSvg from '../svg/email-sync-outline.svg';

export interface IEmailSyncOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const EmailSyncOutlineIcon: FC<IEmailSyncOutlineIconProps> = memo(props => {
  return <EmailSyncOutlineSvg {...props} />;
});
