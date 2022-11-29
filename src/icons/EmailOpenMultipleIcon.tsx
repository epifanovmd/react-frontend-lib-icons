import React, { FC, memo } from 'react';
import EmailOpenMultipleSvg from '../svg/email-open-multiple.svg';

export interface IEmailOpenMultipleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const EmailOpenMultipleIcon: FC<IEmailOpenMultipleIconProps> = memo(props => {
  return <EmailOpenMultipleSvg {...props} />;
});
