import React, { FC, memo } from 'react';
import MouseVariantSvg from '../svg/mouse-variant.svg';

export interface IMouseVariantIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MouseVariantIcon: FC<IMouseVariantIconProps> = memo(props => {
  return <MouseVariantSvg {...props} />;
});
