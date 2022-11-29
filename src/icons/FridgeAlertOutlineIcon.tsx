import React, { FC, memo } from 'react';
import FridgeAlertOutlineSvg from '../svg/fridge-alert-outline.svg';

export interface IFridgeAlertOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FridgeAlertOutlineIcon: FC<IFridgeAlertOutlineIconProps> = memo(props => {
  return <FridgeAlertOutlineSvg {...props} />;
});
