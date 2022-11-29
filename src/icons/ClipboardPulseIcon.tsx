import React, { FC, memo } from 'react';
import ClipboardPulseSvg from '../svg/clipboard-pulse.svg';

export interface IClipboardPulseIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ClipboardPulseIcon: FC<IClipboardPulseIconProps> = memo(props => {
  return <ClipboardPulseSvg {...props} />;
});
