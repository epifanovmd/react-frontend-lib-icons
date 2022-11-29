import React, { FC, memo } from 'react';
import BrushVariantSvg from '../svg/brush-variant.svg';

export interface IBrushVariantIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BrushVariantIcon: FC<IBrushVariantIconProps> = memo(props => {
  return <BrushVariantSvg {...props} />;
});
