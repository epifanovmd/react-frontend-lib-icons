import React, { FC, memo } from 'react';
import PinwheelOutlineSvg from '../svg/pinwheel-outline.svg';

export interface IPinwheelOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PinwheelOutlineIcon: FC<IPinwheelOutlineIconProps> = memo(props => {
  return <PinwheelOutlineSvg {...props} />;
});
