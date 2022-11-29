import React, { FC, memo } from 'react';
import BankRemoveSvg from '../svg/bank-remove.svg';

export interface IBankRemoveIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BankRemoveIcon: FC<IBankRemoveIconProps> = memo(props => {
  return <BankRemoveSvg {...props} />;
});
