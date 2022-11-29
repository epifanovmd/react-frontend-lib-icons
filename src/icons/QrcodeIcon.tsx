import React, { FC, memo } from 'react';
import QrcodeSvg from '../svg/qrcode.svg';

export interface IQrcodeIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const QrcodeIcon: FC<IQrcodeIconProps> = memo(props => {
  return <QrcodeSvg {...props} />;
});
