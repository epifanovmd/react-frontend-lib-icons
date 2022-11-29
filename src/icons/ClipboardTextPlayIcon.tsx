import React, { FC, memo } from 'react';
import ClipboardTextPlaySvg from '../svg/clipboard-text-play.svg';

export interface IClipboardTextPlayIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ClipboardTextPlayIcon: FC<IClipboardTextPlayIconProps> = memo(props => {
  return <ClipboardTextPlaySvg {...props} />;
});
