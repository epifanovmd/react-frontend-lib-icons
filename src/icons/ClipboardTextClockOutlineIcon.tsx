import React, { FC, memo } from 'react';
import ClipboardTextClockOutlineSvg from '../svg/clipboard-text-clock-outline.svg';

export interface IClipboardTextClockOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ClipboardTextClockOutlineIcon: FC<IClipboardTextClockOutlineIconProps> = memo(props => {
  return <ClipboardTextClockOutlineSvg {...props} />;
});
