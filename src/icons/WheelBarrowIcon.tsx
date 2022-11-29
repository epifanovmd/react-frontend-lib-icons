import React, { FC, memo } from 'react';
import WheelBarrowSvg from '../svg/wheel-barrow.svg';

export interface IWheelBarrowIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const WheelBarrowIcon: FC<IWheelBarrowIconProps> = memo(props => {
  return <WheelBarrowSvg {...props} />;
});
