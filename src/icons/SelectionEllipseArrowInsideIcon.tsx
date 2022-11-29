import React, { FC, memo } from 'react';
import SelectionEllipseArrowInsideSvg from '../svg/selection-ellipse-arrow-inside.svg';

export interface ISelectionEllipseArrowInsideIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SelectionEllipseArrowInsideIcon: FC<ISelectionEllipseArrowInsideIconProps> = memo(props => {
  return <SelectionEllipseArrowInsideSvg {...props} />;
});
