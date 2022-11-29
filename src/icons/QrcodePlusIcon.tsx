import React, { FC, memo } from 'react';
import QrcodePlusSvg from '../svg/qrcode-plus.svg';

export interface IQrcodePlusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const QrcodePlusIcon: FC<IQrcodePlusIconProps> = memo(props => {
  return <QrcodePlusSvg {...props} />;
});
