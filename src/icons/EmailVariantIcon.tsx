import React, { FC, memo } from 'react';
import EmailVariantSvg from '../svg/email-variant.svg';

export interface IEmailVariantIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const EmailVariantIcon: FC<IEmailVariantIconProps> = memo(props => {
  return <EmailVariantSvg {...props} />;
});
