import React, { FC, memo } from 'react';
import QrcodeEditSvg from '../svg/qrcode-edit.svg';

export interface IQrcodeEditIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const QrcodeEditIcon: FC<IQrcodeEditIconProps> = memo(props => {
  return <QrcodeEditSvg {...props} />;
});
