import React, { FC, memo } from 'react';
import EmailSearchOutlineSvg from '../svg/email-search-outline.svg';

export interface IEmailSearchOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const EmailSearchOutlineIcon: FC<IEmailSearchOutlineIconProps> = memo(props => {
  return <EmailSearchOutlineSvg {...props} />;
});
