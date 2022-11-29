import React, { FC, memo } from 'react';
import BarcodeScanSvg from '../svg/barcode-scan.svg';

export interface IBarcodeScanIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BarcodeScanIcon: FC<IBarcodeScanIconProps> = memo(props => {
  return <BarcodeScanSvg {...props} />;
});
