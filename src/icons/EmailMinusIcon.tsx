import React, { FC, memo } from 'react';
import EmailMinusSvg from '../svg/email-minus.svg';

export interface IEmailMinusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const EmailMinusIcon: FC<IEmailMinusIconProps> = memo(props => {
  return <EmailMinusSvg {...props} />;
});
