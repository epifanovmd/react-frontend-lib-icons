import React, { FC, memo } from 'react';
import DragSvg from '../svg/drag.svg';

export interface IDragIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const DragIcon: FC<IDragIconProps> = memo(props => {
  return <DragSvg {...props} />;
});
