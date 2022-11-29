import React, { FC, memo } from 'react';
import CardAccountMailSvg from '../svg/card-account-mail.svg';

export interface ICardAccountMailIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CardAccountMailIcon: FC<ICardAccountMailIconProps> = memo(props => {
  return <CardAccountMailSvg {...props} />;
});
