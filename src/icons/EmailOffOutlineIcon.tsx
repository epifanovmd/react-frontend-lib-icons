import React, { FC, memo } from 'react';
import EmailOffOutlineSvg from '../svg/email-off-outline.svg';

export interface IEmailOffOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const EmailOffOutlineIcon: FC<IEmailOffOutlineIconProps> = memo(props => {
  return <EmailOffOutlineSvg {...props} />;
});
