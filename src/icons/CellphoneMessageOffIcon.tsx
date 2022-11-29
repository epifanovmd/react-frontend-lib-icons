import React, { FC, memo } from 'react';
import CellphoneMessageOffSvg from '../svg/cellphone-message-off.svg';

export interface ICellphoneMessageOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CellphoneMessageOffIcon: FC<ICellphoneMessageOffIconProps> = memo(props => {
  return <CellphoneMessageOffSvg {...props} />;
});
