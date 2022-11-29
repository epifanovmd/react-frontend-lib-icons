import React, { FC, memo } from 'react';
import QrcodeScanSvg from '../svg/qrcode-scan.svg';

export interface IQrcodeScanIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const QrcodeScanIcon: FC<IQrcodeScanIconProps> = memo(props => {
  return <QrcodeScanSvg {...props} />;
});
