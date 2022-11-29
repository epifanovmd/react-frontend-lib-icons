import React, { FC, memo } from 'react';
import PointOfSaleSvg from '../svg/point-of-sale.svg';

export interface IPointOfSaleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PointOfSaleIcon: FC<IPointOfSaleIconProps> = memo(props => {
  return <PointOfSaleSvg {...props} />;
});
