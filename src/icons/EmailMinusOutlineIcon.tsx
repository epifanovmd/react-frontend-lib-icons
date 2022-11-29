import React, { FC, memo } from 'react';
import EmailMinusOutlineSvg from '../svg/email-minus-outline.svg';

export interface IEmailMinusOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const EmailMinusOutlineIcon: FC<IEmailMinusOutlineIconProps> = memo(props => {
  return <EmailMinusOutlineSvg {...props} />;
});
