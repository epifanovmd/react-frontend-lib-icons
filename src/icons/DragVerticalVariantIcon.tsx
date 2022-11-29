import React, { FC, memo } from 'react';
import DragVerticalVariantSvg from '../svg/drag-vertical-variant.svg';

export interface IDragVerticalVariantIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const DragVerticalVariantIcon: FC<IDragVerticalVariantIconProps> = memo(props => {
  return <DragVerticalVariantSvg {...props} />;
});
