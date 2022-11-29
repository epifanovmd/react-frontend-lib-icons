import React, { FC, memo } from 'react';
import BarcodeOffSvg from '../svg/barcode-off.svg';

export interface IBarcodeOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BarcodeOffIcon: FC<IBarcodeOffIconProps> = memo(props => {
  return <BarcodeOffSvg {...props} />;
});
