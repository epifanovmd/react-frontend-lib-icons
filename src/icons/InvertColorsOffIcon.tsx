import React, { FC, memo } from 'react';
import InvertColorsOffSvg from '../svg/invert-colors-off.svg';

export interface IInvertColorsOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const InvertColorsOffIcon: FC<IInvertColorsOffIconProps> = memo(props => {
  return <InvertColorsOffSvg {...props} />;
});
