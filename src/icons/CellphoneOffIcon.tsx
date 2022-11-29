import React, { FC, memo } from 'react';
import CellphoneOffSvg from '../svg/cellphone-off.svg';

export interface ICellphoneOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CellphoneOffIcon: FC<ICellphoneOffIconProps> = memo(props => {
  return <CellphoneOffSvg {...props} />;
});
