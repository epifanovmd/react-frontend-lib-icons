import React, { FC, memo } from 'react';
import ClipboardClockSvg from '../svg/clipboard-clock.svg';

export interface IClipboardClockIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ClipboardClockIcon: FC<IClipboardClockIconProps> = memo(props => {
  return <ClipboardClockSvg {...props} />;
});
