import React, { FC, memo } from 'react';
import EmailRemoveSvg from '../svg/email-remove.svg';

export interface IEmailRemoveIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const EmailRemoveIcon: FC<IEmailRemoveIconProps> = memo(props => {
  return <EmailRemoveSvg {...props} />;
});
