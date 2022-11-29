import React, { FC, memo } from 'react';
import CellphoneNfcOffSvg from '../svg/cellphone-nfc-off.svg';

export interface ICellphoneNfcOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CellphoneNfcOffIcon: FC<ICellphoneNfcOffIconProps> = memo(props => {
  return <CellphoneNfcOffSvg {...props} />;
});
