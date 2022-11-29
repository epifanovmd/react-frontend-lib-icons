import React, { FC, memo } from 'react';
import FridgeVariantAlertOutlineSvg from '../svg/fridge-variant-alert-outline.svg';

export interface IFridgeVariantAlertOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FridgeVariantAlertOutlineIcon: FC<IFridgeVariantAlertOutlineIconProps> = memo(props => {
  return <FridgeVariantAlertOutlineSvg {...props} />;
});
