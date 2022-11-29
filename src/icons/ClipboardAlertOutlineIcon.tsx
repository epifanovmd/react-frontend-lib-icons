import React, { FC, memo } from 'react';
import ClipboardAlertOutlineSvg from '../svg/clipboard-alert-outline.svg';

export interface IClipboardAlertOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ClipboardAlertOutlineIcon: FC<IClipboardAlertOutlineIconProps> = memo(props => {
  return <ClipboardAlertOutlineSvg {...props} />;
});
