import React, { FC, memo } from 'react';
import EmailArrowRightSvg from '../svg/email-arrow-right.svg';

export interface IEmailArrowRightIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const EmailArrowRightIcon: FC<IEmailArrowRightIconProps> = memo(props => {
  return <EmailArrowRightSvg {...props} />;
});
