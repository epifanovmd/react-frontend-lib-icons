import React, { FC, memo } from 'react';
import EmailFastOutlineSvg from '../svg/email-fast-outline.svg';

export interface IEmailFastOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const EmailFastOutlineIcon: FC<IEmailFastOutlineIconProps> = memo(props => {
  return <EmailFastOutlineSvg {...props} />;
});
