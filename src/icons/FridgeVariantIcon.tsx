import React, { FC, memo } from 'react';
import FridgeVariantSvg from '../svg/fridge-variant.svg';

export interface IFridgeVariantIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FridgeVariantIcon: FC<IFridgeVariantIconProps> = memo(props => {
  return <FridgeVariantSvg {...props} />;
});
