import React, { FC, memo } from 'react';
import EmailRemoveOutlineSvg from '../svg/email-remove-outline.svg';

export interface IEmailRemoveOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const EmailRemoveOutlineIcon: FC<IEmailRemoveOutlineIconProps> = memo(props => {
  return <EmailRemoveOutlineSvg {...props} />;
});
