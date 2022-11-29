import React, { FC, memo } from 'react';
import OrderNumericAscendingSvg from '../svg/order-numeric-ascending.svg';

export interface IOrderNumericAscendingIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const OrderNumericAscendingIcon: FC<IOrderNumericAscendingIconProps> = memo(props => {
  return <OrderNumericAscendingSvg {...props} />;
});
