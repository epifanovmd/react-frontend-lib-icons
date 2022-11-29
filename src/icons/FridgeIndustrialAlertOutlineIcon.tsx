import React, { FC, memo } from 'react';
import FridgeIndustrialAlertOutlineSvg from '../svg/fridge-industrial-alert-outline.svg';

export interface IFridgeIndustrialAlertOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FridgeIndustrialAlertOutlineIcon: FC<IFridgeIndustrialAlertOutlineIconProps> = memo(props => {
  return <FridgeIndustrialAlertOutlineSvg {...props} />;
});
