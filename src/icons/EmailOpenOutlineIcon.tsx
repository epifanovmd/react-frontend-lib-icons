import React, { FC, memo } from 'react';
import EmailOpenOutlineSvg from '../svg/email-open-outline.svg';

export interface IEmailOpenOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const EmailOpenOutlineIcon: FC<IEmailOpenOutlineIconProps> = memo(props => {
  return <EmailOpenOutlineSvg {...props} />;
});
