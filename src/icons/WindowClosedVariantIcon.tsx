import React, { FC, memo } from 'react';
import WindowClosedVariantSvg from '../svg/window-closed-variant.svg';

export interface IWindowClosedVariantIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const WindowClosedVariantIcon: FC<IWindowClosedVariantIconProps> = memo(props => {
  return <WindowClosedVariantSvg {...props} />;
});
