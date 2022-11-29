import React, { FC, memo } from 'react';
import OrderNumericDescendingSvg from '../svg/order-numeric-descending.svg';

export interface IOrderNumericDescendingIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const OrderNumericDescendingIcon: FC<IOrderNumericDescendingIconProps> = memo(props => {
  return <OrderNumericDescendingSvg {...props} />;
});
