import React, { FC, memo } from 'react';
import InvertColorsSvg from '../svg/invert-colors.svg';

export interface IInvertColorsIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const InvertColorsIcon: FC<IInvertColorsIconProps> = memo(props => {
  return <InvertColorsSvg {...props} />;
});
