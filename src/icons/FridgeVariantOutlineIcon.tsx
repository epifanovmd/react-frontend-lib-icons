import React, { FC, memo } from 'react';
import FridgeVariantOutlineSvg from '../svg/fridge-variant-outline.svg';

export interface IFridgeVariantOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FridgeVariantOutlineIcon: FC<IFridgeVariantOutlineIconProps> = memo(props => {
  return <FridgeVariantOutlineSvg {...props} />;
});
