import React, { FC, memo } from 'react';
import EmailArrowRightOutlineSvg from '../svg/email-arrow-right-outline.svg';

export interface IEmailArrowRightOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const EmailArrowRightOutlineIcon: FC<IEmailArrowRightOutlineIconProps> = memo(props => {
  return <EmailArrowRightOutlineSvg {...props} />;
});
