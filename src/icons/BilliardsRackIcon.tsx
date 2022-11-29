import React, { FC, memo } from 'react';
import BilliardsRackSvg from '../svg/billiards-rack.svg';

export interface IBilliardsRackIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BilliardsRackIcon: FC<IBilliardsRackIconProps> = memo(props => {
  return <BilliardsRackSvg {...props} />;
});
