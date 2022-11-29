import React, { FC, memo } from 'react';
import CellphoneChargingSvg from '../svg/cellphone-charging.svg';

export interface ICellphoneChargingIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CellphoneChargingIcon: FC<ICellphoneChargingIconProps> = memo(props => {
  return <CellphoneChargingSvg {...props} />;
});
