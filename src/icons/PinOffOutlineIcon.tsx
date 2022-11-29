import React, { FC, memo } from 'react';
import PinOffOutlineSvg from '../svg/pin-off-outline.svg';

export interface IPinOffOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PinOffOutlineIcon: FC<IPinOffOutlineIconProps> = memo(props => {
  return <PinOffOutlineSvg {...props} />;
});
