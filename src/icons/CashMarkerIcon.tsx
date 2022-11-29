import React, { FC, memo } from 'react';
import CashMarkerSvg from '../svg/cash-marker.svg';

export interface ICashMarkerIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CashMarkerIcon: FC<ICashMarkerIconProps> = memo(props => {
  return <CashMarkerSvg {...props} />;
});
