import React, { FC, memo } from 'react';
import WindowOpenVariantSvg from '../svg/window-open-variant.svg';

export interface IWindowOpenVariantIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const WindowOpenVariantIcon: FC<IWindowOpenVariantIconProps> = memo(props => {
  return <WindowOpenVariantSvg {...props} />;
});
