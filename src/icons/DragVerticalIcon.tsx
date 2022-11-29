import React, { FC, memo } from 'react';
import DragVerticalSvg from '../svg/drag-vertical.svg';

export interface IDragVerticalIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const DragVerticalIcon: FC<IDragVerticalIconProps> = memo(props => {
  return <DragVerticalSvg {...props} />;
});
