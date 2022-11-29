import React, { FC, memo } from 'react';
import SelectionDragSvg from '../svg/selection-drag.svg';

export interface ISelectionDragIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SelectionDragIcon: FC<ISelectionDragIconProps> = memo(props => {
  return <SelectionDragSvg {...props} />;
});
