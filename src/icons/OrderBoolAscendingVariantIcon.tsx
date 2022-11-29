import React, { FC, memo } from 'react';
import OrderBoolAscendingVariantSvg from '../svg/order-bool-ascending-variant.svg';

export interface IOrderBoolAscendingVariantIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const OrderBoolAscendingVariantIcon: FC<IOrderBoolAscendingVariantIconProps> = memo(props => {
  return <OrderBoolAscendingVariantSvg {...props} />;
});
