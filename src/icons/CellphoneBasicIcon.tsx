import React, { FC, memo } from 'react';
import CellphoneBasicSvg from '../svg/cellphone-basic.svg';

export interface ICellphoneBasicIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CellphoneBasicIcon: FC<ICellphoneBasicIconProps> = memo(props => {
  return <CellphoneBasicSvg {...props} />;
});
