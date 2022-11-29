import React, { FC, memo } from 'react';
import PrinterPosNetworkSvg from '../svg/printer-pos-network.svg';

export interface IPrinterPosNetworkIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PrinterPosNetworkIcon: FC<IPrinterPosNetworkIconProps> = memo(props => {
  return <PrinterPosNetworkSvg {...props} />;
});
