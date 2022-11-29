import React, { FC, memo } from 'react';
import CreditCardMarkerOutlineSvg from '../svg/credit-card-marker-outline.svg';

export interface ICreditCardMarkerOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CreditCardMarkerOutlineIcon: FC<ICreditCardMarkerOutlineIconProps> = memo(props => {
  return <CreditCardMarkerOutlineSvg {...props} />;
});
