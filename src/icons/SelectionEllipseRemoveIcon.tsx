import React, { FC, memo } from 'react';
import SelectionEllipseRemoveSvg from '../svg/selection-ellipse-remove.svg';

export interface ISelectionEllipseRemoveIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SelectionEllipseRemoveIcon: FC<ISelectionEllipseRemoveIconProps> = memo(props => {
  return <SelectionEllipseRemoveSvg {...props} />;
});
