import React, { FC, memo } from 'react';
import SelectionMultipleMarkerSvg from '../svg/selection-multiple-marker.svg';

export interface ISelectionMultipleMarkerIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SelectionMultipleMarkerIcon: FC<ISelectionMultipleMarkerIconProps> = memo(props => {
  return <SelectionMultipleMarkerSvg {...props} />;
});
