import React, { FC, memo } from 'react';
import ClipboardTextClockSvg from '../svg/clipboard-text-clock.svg';

export interface IClipboardTextClockIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ClipboardTextClockIcon: FC<IClipboardTextClockIconProps> = memo(props => {
  return <ClipboardTextClockSvg {...props} />;
});
