import React, { FC, memo } from 'react';
import SaleSvg from '../svg/sale.svg';

export interface ISaleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SaleIcon: FC<ISaleIconProps> = memo(props => {
  return <SaleSvg {...props} />;
});
