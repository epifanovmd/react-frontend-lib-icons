import React, { FC, memo } from 'react';
import FridgeIndustrialSvg from '../svg/fridge-industrial.svg';

export interface IFridgeIndustrialIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FridgeIndustrialIcon: FC<IFridgeIndustrialIconProps> = memo(props => {
  return <FridgeIndustrialSvg {...props} />;
});
