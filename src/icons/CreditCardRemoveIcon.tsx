import React, { FC, memo } from 'react';
import CreditCardRemoveSvg from '../svg/credit-card-remove.svg';

export interface ICreditCardRemoveIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CreditCardRemoveIcon: FC<ICreditCardRemoveIconProps> = memo(props => {
  return <CreditCardRemoveSvg {...props} />;
});
