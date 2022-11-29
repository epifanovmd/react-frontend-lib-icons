import React, { FC, memo } from 'react';
import MouseVariantOffSvg from '../svg/mouse-variant-off.svg';

export interface IMouseVariantOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MouseVariantOffIcon: FC<IMouseVariantOffIconProps> = memo(props => {
  return <MouseVariantOffSvg {...props} />;
});
