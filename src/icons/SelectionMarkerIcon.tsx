import React, { FC, memo } from 'react';
import SelectionMarkerSvg from '../svg/selection-marker.svg';

export interface ISelectionMarkerIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SelectionMarkerIcon: FC<ISelectionMarkerIconProps> = memo(props => {
  return <SelectionMarkerSvg {...props} />;
});
