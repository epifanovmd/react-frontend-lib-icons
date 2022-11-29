import React, { FC, memo } from 'react';
import CreditCardMarkerSvg from '../svg/credit-card-marker.svg';

export interface ICreditCardMarkerIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CreditCardMarkerIcon: FC<ICreditCardMarkerIconProps> = memo(props => {
  return <CreditCardMarkerSvg {...props} />;
});
