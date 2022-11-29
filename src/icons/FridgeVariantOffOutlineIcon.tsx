import React, { FC, memo } from 'react';
import FridgeVariantOffOutlineSvg from '../svg/fridge-variant-off-outline.svg';

export interface IFridgeVariantOffOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FridgeVariantOffOutlineIcon: FC<IFridgeVariantOffOutlineIconProps> = memo(props => {
  return <FridgeVariantOffOutlineSvg {...props} />;
});
