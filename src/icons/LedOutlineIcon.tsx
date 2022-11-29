import React, { FC, memo } from 'react';
import LedOutlineSvg from '../svg/led-outline.svg';

export interface ILedOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const LedOutlineIcon: FC<ILedOutlineIconProps> = memo(props => {
  return <LedOutlineSvg {...props} />;
});
