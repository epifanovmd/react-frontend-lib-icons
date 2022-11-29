import React, { FC, memo } from 'react';
import ClipboardClockOutlineSvg from '../svg/clipboard-clock-outline.svg';

export interface IClipboardClockOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ClipboardClockOutlineIcon: FC<IClipboardClockOutlineIconProps> = memo(props => {
  return <ClipboardClockOutlineSvg {...props} />;
});
