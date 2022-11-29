import React, { FC, memo } from 'react';
import OrderBoolDescendingVariantSvg from '../svg/order-bool-descending-variant.svg';

export interface IOrderBoolDescendingVariantIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const OrderBoolDescendingVariantIcon: FC<IOrderBoolDescendingVariantIconProps> = memo(props => {
  return <OrderBoolDescendingVariantSvg {...props} />;
});
