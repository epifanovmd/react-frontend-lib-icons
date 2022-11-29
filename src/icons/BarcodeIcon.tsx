import React, { FC, memo } from 'react';
import BarcodeSvg from '../svg/barcode.svg';

export interface IBarcodeIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BarcodeIcon: FC<IBarcodeIconProps> = memo(props => {
  return <BarcodeSvg {...props} />;
});
