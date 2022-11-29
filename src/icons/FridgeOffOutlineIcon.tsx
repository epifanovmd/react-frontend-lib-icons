import React, { FC, memo } from 'react';
import FridgeOffOutlineSvg from '../svg/fridge-off-outline.svg';

export interface IFridgeOffOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FridgeOffOutlineIcon: FC<IFridgeOffOutlineIconProps> = memo(props => {
  return <FridgeOffOutlineSvg {...props} />;
});
