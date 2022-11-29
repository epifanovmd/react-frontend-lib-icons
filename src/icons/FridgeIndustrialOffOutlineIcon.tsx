import React, { FC, memo } from 'react';
import FridgeIndustrialOffOutlineSvg from '../svg/fridge-industrial-off-outline.svg';

export interface IFridgeIndustrialOffOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FridgeIndustrialOffOutlineIcon: FC<IFridgeIndustrialOffOutlineIconProps> = memo(props => {
  return <FridgeIndustrialOffOutlineSvg {...props} />;
});
