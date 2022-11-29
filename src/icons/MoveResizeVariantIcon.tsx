import React, { FC, memo } from 'react';
import MoveResizeVariantSvg from '../svg/move-resize-variant.svg';

export interface IMoveResizeVariantIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MoveResizeVariantIcon: FC<IMoveResizeVariantIconProps> = memo(props => {
  return <MoveResizeVariantSvg {...props} />;
});
