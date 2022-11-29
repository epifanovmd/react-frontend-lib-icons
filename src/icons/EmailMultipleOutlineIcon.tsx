import React, { FC, memo } from 'react';
import EmailMultipleOutlineSvg from '../svg/email-multiple-outline.svg';

export interface IEmailMultipleOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const EmailMultipleOutlineIcon: FC<IEmailMultipleOutlineIconProps> = memo(props => {
  return <EmailMultipleOutlineSvg {...props} />;
});
