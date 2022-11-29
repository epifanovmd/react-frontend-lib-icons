import React, { FC, memo } from 'react';
import OrderBoolDescendingSvg from '../svg/order-bool-descending.svg';

export interface IOrderBoolDescendingIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const OrderBoolDescendingIcon: FC<IOrderBoolDescendingIconProps> = memo(props => {
  return <OrderBoolDescendingSvg {...props} />;
});
