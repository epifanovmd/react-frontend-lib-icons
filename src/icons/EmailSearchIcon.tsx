import React, { FC, memo } from 'react';
import EmailSearchSvg from '../svg/email-search.svg';

export interface IEmailSearchIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const EmailSearchIcon: FC<IEmailSearchIconProps> = memo(props => {
  return <EmailSearchSvg {...props} />;
});
