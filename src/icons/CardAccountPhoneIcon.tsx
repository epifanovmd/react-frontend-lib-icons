import React, { FC, memo } from 'react';
import CardAccountPhoneSvg from '../svg/card-account-phone.svg';

export interface ICardAccountPhoneIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CardAccountPhoneIcon: FC<ICardAccountPhoneIconProps> = memo(props => {
  return <CardAccountPhoneSvg {...props} />;
});
