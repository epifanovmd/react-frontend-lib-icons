import React, { FC, memo } from 'react';
import DragHorizontalVariantSvg from '../svg/drag-horizontal-variant.svg';

export interface IDragHorizontalVariantIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const DragHorizontalVariantIcon: FC<IDragHorizontalVariantIconProps> = memo(props => {
  return <DragHorizontalVariantSvg {...props} />;
});
