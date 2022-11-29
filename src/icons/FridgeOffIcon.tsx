import React, { FC, memo } from 'react';
import FridgeOffSvg from '../svg/fridge-off.svg';

export interface IFridgeOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FridgeOffIcon: FC<IFridgeOffIconProps> = memo(props => {
  return <FridgeOffSvg {...props} />;
});
