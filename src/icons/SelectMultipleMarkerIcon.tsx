import React, { FC, memo } from 'react';
import SelectMultipleMarkerSvg from '../svg/select-multiple-marker.svg';

export interface ISelectMultipleMarkerIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SelectMultipleMarkerIcon: FC<ISelectMultipleMarkerIconProps> = memo(props => {
  return <SelectMultipleMarkerSvg {...props} />;
});
