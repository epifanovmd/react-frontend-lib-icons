import React, { FC, memo } from 'react';
import SelectMarkerSvg from '../svg/select-marker.svg';

export interface ISelectMarkerIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SelectMarkerIcon: FC<ISelectMarkerIconProps> = memo(props => {
  return <SelectMarkerSvg {...props} />;
});
