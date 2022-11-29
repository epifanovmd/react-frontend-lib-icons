import React, { FC, memo } from 'react';
import FridgeBottomSvg from '../svg/fridge-bottom.svg';

export interface IFridgeBottomIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FridgeBottomIcon: FC<IFridgeBottomIconProps> = memo(props => {
  return <FridgeBottomSvg {...props} />;
});
