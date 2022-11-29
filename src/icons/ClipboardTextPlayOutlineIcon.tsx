import React, { FC, memo } from 'react';
import ClipboardTextPlayOutlineSvg from '../svg/clipboard-text-play-outline.svg';

export interface IClipboardTextPlayOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ClipboardTextPlayOutlineIcon: FC<IClipboardTextPlayOutlineIconProps> = memo(props => {
  return <ClipboardTextPlayOutlineSvg {...props} />;
});
