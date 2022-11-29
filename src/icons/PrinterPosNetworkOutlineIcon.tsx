import React, { FC, memo } from 'react';
import PrinterPosNetworkOutlineSvg from '../svg/printer-pos-network-outline.svg';

export interface IPrinterPosNetworkOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PrinterPosNetworkOutlineIcon: FC<IPrinterPosNetworkOutlineIconProps> = memo(props => {
  return <PrinterPosNetworkOutlineSvg {...props} />;
});
