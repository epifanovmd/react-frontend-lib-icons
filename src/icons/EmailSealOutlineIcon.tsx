import React, { FC, memo } from 'react';
import EmailSealOutlineSvg from '../svg/email-seal-outline.svg';

export interface IEmailSealOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const EmailSealOutlineIcon: FC<IEmailSealOutlineIconProps> = memo(props => {
  return <EmailSealOutlineSvg {...props} />;
});
