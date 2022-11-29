import React, { FC, memo } from 'react';
import EmailArrowLeftSvg from '../svg/email-arrow-left.svg';

export interface IEmailArrowLeftIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const EmailArrowLeftIcon: FC<IEmailArrowLeftIconProps> = memo(props => {
  return <EmailArrowLeftSvg {...props} />;
});
