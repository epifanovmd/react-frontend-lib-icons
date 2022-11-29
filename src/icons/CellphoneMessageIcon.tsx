import React, { FC, memo } from 'react';
import CellphoneMessageSvg from '../svg/cellphone-message.svg';

export interface ICellphoneMessageIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CellphoneMessageIcon: FC<ICellphoneMessageIconProps> = memo(props => {
  return <CellphoneMessageSvg {...props} />;
});
