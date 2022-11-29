import React, { FC, memo } from 'react';
import FridgeTopSvg from '../svg/fridge-top.svg';

export interface IFridgeTopIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FridgeTopIcon: FC<IFridgeTopIconProps> = memo(props => {
  return <FridgeTopSvg {...props} />;
});
