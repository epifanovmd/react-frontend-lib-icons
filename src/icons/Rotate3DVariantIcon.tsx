import React, { FC, memo } from 'react';
import Rotate3DVariantSvg from '../svg/rotate-3d-variant.svg';

export interface IRotate3DVariantIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const Rotate3DVariantIcon: FC<IRotate3DVariantIconProps> = memo(props => {
  return <Rotate3DVariantSvg {...props} />;
});
