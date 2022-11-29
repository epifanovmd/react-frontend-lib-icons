import React, { FC, memo } from 'react';
import FridgeOutlineSvg from '../svg/fridge-outline.svg';

export interface IFridgeOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FridgeOutlineIcon: FC<IFridgeOutlineIconProps> = memo(props => {
  return <FridgeOutlineSvg {...props} />;
});
