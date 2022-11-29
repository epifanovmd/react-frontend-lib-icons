import React, { FC, memo } from 'react';
import EmailOpenMultipleOutlineSvg from '../svg/email-open-multiple-outline.svg';

export interface IEmailOpenMultipleOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const EmailOpenMultipleOutlineIcon: FC<IEmailOpenMultipleOutlineIconProps> = memo(props => {
  return <EmailOpenMultipleOutlineSvg {...props} />;
});
