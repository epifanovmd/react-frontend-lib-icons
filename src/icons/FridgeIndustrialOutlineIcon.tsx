import React, { FC, memo } from 'react';
import FridgeIndustrialOutlineSvg from '../svg/fridge-industrial-outline.svg';

export interface IFridgeIndustrialOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FridgeIndustrialOutlineIcon: FC<IFridgeIndustrialOutlineIconProps> = memo(props => {
  return <FridgeIndustrialOutlineSvg {...props} />;
});
