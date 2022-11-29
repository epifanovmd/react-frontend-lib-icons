import React, { FC, memo } from 'react';
import CellphoneNfcSvg from '../svg/cellphone-nfc.svg';

export interface ICellphoneNfcIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CellphoneNfcIcon: FC<ICellphoneNfcIconProps> = memo(props => {
  return <CellphoneNfcSvg {...props} />;
});
