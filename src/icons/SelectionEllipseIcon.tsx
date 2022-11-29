import React, { FC, memo } from 'react';
import SelectionEllipseSvg from '../svg/selection-ellipse.svg';

export interface ISelectionEllipseIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SelectionEllipseIcon: FC<ISelectionEllipseIconProps> = memo(props => {
  return <SelectionEllipseSvg {...props} />;
});
