import React, { FC, memo } from 'react';
import CellphoneMarkerSvg from '../svg/cellphone-marker.svg';

export interface ICellphoneMarkerIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CellphoneMarkerIcon: FC<ICellphoneMarkerIconProps> = memo(props => {
  return <CellphoneMarkerSvg {...props} />;
});
