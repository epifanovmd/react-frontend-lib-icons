import React, { FC, memo } from 'react';
import TruckDeliveryOutlineSvg from '../svg/truck-delivery-outline.svg';

export interface ITruckDeliveryOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TruckDeliveryOutlineIcon: FC<ITruckDeliveryOutlineIconProps> = memo(props => {
  return <TruckDeliveryOutlineSvg {...props} />;
});
