import React, { FC, memo } from 'react';
import CreditCardEditSvg from '../svg/credit-card-edit.svg';

export interface ICreditCardEditIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CreditCardEditIcon: FC<ICreditCardEditIconProps> = memo(props => {
  return <CreditCardEditSvg {...props} />;
});
