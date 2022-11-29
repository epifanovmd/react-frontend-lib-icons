import React, { FC, memo } from 'react';
import DragHorizontalSvg from '../svg/drag-horizontal.svg';

export interface IDragHorizontalIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const DragHorizontalIcon: FC<IDragHorizontalIconProps> = memo(props => {
  return <DragHorizontalSvg {...props} />;
});
