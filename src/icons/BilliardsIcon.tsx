import React, { FC, memo } from 'react';
import BilliardsSvg from '../svg/billiards.svg';

export interface IBilliardsIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BilliardsIcon: FC<IBilliardsIconProps> = memo(props => {
  return <BilliardsSvg {...props} />;
});
