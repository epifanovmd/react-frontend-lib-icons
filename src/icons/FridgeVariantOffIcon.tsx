import React, { FC, memo } from 'react';
import FridgeVariantOffSvg from '../svg/fridge-variant-off.svg';

export interface IFridgeVariantOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FridgeVariantOffIcon: FC<IFridgeVariantOffIconProps> = memo(props => {
  return <FridgeVariantOffSvg {...props} />;
});
