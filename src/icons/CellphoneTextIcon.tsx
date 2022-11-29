import React, { FC, memo } from 'react';
import CellphoneTextSvg from '../svg/cellphone-text.svg';

export interface ICellphoneTextIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CellphoneTextIcon: FC<ICellphoneTextIconProps> = memo(props => {
  return <CellphoneTextSvg {...props} />;
});
