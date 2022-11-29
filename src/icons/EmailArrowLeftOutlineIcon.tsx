import React, { FC, memo } from 'react';
import EmailArrowLeftOutlineSvg from '../svg/email-arrow-left-outline.svg';

export interface IEmailArrowLeftOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const EmailArrowLeftOutlineIcon: FC<IEmailArrowLeftOutlineIconProps> = memo(props => {
  return <EmailArrowLeftOutlineSvg {...props} />;
});
