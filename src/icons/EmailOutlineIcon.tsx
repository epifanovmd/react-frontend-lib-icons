import React, { FC, memo } from 'react';
import EmailOutlineSvg from '../svg/email-outline.svg';

export interface IEmailOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const EmailOutlineIcon: FC<IEmailOutlineIconProps> = memo(props => {
  return <EmailOutlineSvg {...props} />;
});
