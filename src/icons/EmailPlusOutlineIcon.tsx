import React, { FC, memo } from 'react';
import EmailPlusOutlineSvg from '../svg/email-plus-outline.svg';

export interface IEmailPlusOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const EmailPlusOutlineIcon: FC<IEmailPlusOutlineIconProps> = memo(props => {
  return <EmailPlusOutlineSvg {...props} />;
});
