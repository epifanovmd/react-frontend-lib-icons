import React, { FC, memo } from 'react';
import CellphoneWirelessSvg from '../svg/cellphone-wireless.svg';

export interface ICellphoneWirelessIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CellphoneWirelessIcon: FC<ICellphoneWirelessIconProps> = memo(props => {
  return <CellphoneWirelessSvg {...props} />;
});
