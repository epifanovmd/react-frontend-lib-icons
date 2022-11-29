import React, { FC, memo } from 'react';
import CellphoneArrowDownVariantSvg from '../svg/cellphone-arrow-down-variant.svg';

export interface ICellphoneArrowDownVariantIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CellphoneArrowDownVariantIcon: FC<ICellphoneArrowDownVariantIconProps> = memo(props => {
  return <CellphoneArrowDownVariantSvg {...props} />;
});
