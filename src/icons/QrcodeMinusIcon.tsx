import React, { FC, memo } from 'react';
import QrcodeMinusSvg from '../svg/qrcode-minus.svg';

export interface IQrcodeMinusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const QrcodeMinusIcon: FC<IQrcodeMinusIconProps> = memo(props => {
  return <QrcodeMinusSvg {...props} />;
});
