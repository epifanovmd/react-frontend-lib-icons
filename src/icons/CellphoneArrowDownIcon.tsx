import React, { FC, memo } from 'react';
import CellphoneArrowDownSvg from '../svg/cellphone-arrow-down.svg';

export interface ICellphoneArrowDownIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CellphoneArrowDownIcon: FC<ICellphoneArrowDownIconProps> = memo(props => {
  return <CellphoneArrowDownSvg {...props} />;
});
