import React, { FC, memo } from 'react';
import RotateRightVariantSvg from '../svg/rotate-right-variant.svg';

export interface IRotateRightVariantIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const RotateRightVariantIcon: FC<IRotateRightVariantIconProps> = memo(props => {
  return <RotateRightVariantSvg {...props} />;
});
