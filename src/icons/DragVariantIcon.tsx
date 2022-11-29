import React, { FC, memo } from 'react';
import DragVariantSvg from '../svg/drag-variant.svg';

export interface IDragVariantIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const DragVariantIcon: FC<IDragVariantIconProps> = memo(props => {
  return <DragVariantSvg {...props} />;
});
