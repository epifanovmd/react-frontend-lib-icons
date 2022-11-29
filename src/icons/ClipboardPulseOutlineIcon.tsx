import React, { FC, memo } from 'react';
import ClipboardPulseOutlineSvg from '../svg/clipboard-pulse-outline.svg';

export interface IClipboardPulseOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ClipboardPulseOutlineIcon: FC<IClipboardPulseOutlineIconProps> = memo(props => {
  return <ClipboardPulseOutlineSvg {...props} />;
});
