import React, { FC, memo } from 'react';
import EmailEditSvg from '../svg/email-edit.svg';

export interface IEmailEditIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const EmailEditIcon: FC<IEmailEditIconProps> = memo(props => {
  return <EmailEditSvg {...props} />;
});
