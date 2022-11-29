import React, { FC, memo } from 'react';
import PinOutlineSvg from '../svg/pin-outline.svg';

export interface IPinOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PinOutlineIcon: FC<IPinOutlineIconProps> = memo(props => {
  return <PinOutlineSvg {...props} />;
});
