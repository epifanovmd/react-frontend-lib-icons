import React, { FC, memo } from 'react';
import QrcodeRemoveSvg from '../svg/qrcode-remove.svg';

export interface IQrcodeRemoveIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const QrcodeRemoveIcon: FC<IQrcodeRemoveIconProps> = memo(props => {
  return <QrcodeRemoveSvg {...props} />;
});
