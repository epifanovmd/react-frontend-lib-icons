import React, { FC, memo } from 'react';
import FridgeIndustrialOffSvg from '../svg/fridge-industrial-off.svg';

export interface IFridgeIndustrialOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FridgeIndustrialOffIcon: FC<IFridgeIndustrialOffIconProps> = memo(props => {
  return <FridgeIndustrialOffSvg {...props} />;
});
