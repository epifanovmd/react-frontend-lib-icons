import React, { FC, memo } from 'react';
import PinwheelSvg from '../svg/pinwheel.svg';

export interface IPinwheelIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PinwheelIcon: FC<IPinwheelIconProps> = memo(props => {
  return <PinwheelSvg {...props} />;
});
