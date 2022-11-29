import React, { FC, memo } from 'react';
import EmailEditOutlineSvg from '../svg/email-edit-outline.svg';

export interface IEmailEditOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const EmailEditOutlineIcon: FC<IEmailEditOutlineIconProps> = memo(props => {
  return <EmailEditOutlineSvg {...props} />;
});
