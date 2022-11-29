import React, { FC, memo } from 'react';
import CellphoneCheckSvg from '../svg/cellphone-check.svg';

export interface ICellphoneCheckIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CellphoneCheckIcon: FC<ICellphoneCheckIconProps> = memo(props => {
  return <CellphoneCheckSvg {...props} />;
});
