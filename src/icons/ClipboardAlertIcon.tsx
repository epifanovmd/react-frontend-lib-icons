import React, { FC, memo } from 'react';
import ClipboardAlertSvg from '../svg/clipboard-alert.svg';

export interface IClipboardAlertIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ClipboardAlertIcon: FC<IClipboardAlertIconProps> = memo(props => {
  return <ClipboardAlertSvg {...props} />;
});
