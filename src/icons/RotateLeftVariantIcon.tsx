import React, { FC, memo } from 'react';
import RotateLeftVariantSvg from '../svg/rotate-left-variant.svg';

export interface IRotateLeftVariantIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const RotateLeftVariantIcon: FC<IRotateLeftVariantIconProps> = memo(props => {
  return <RotateLeftVariantSvg {...props} />;
});
