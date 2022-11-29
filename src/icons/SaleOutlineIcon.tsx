import React, { FC, memo } from 'react';
import SaleOutlineSvg from '../svg/sale-outline.svg';

export interface ISaleOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SaleOutlineIcon: FC<ISaleOutlineIconProps> = memo(props => {
  return <SaleOutlineSvg {...props} />;
});
