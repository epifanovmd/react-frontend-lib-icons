import React, { FC, memo } from 'react';
import FridgeSvg from '../svg/fridge.svg';

export interface IFridgeIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FridgeIcon: FC<IFridgeIconProps> = memo(props => {
  return <FridgeSvg {...props} />;
});
