import React, { FC, memo } from 'react';
import CardAccountPhoneOutlineSvg from '../svg/card-account-phone-outline.svg';

export interface ICardAccountPhoneOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CardAccountPhoneOutlineIcon: FC<ICardAccountPhoneOutlineIconProps> = memo(props => {
  return <CardAccountPhoneOutlineSvg {...props} />;
});
