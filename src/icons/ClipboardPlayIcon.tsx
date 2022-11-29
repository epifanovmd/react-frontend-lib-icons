import React, { FC, memo } from 'react';
import ClipboardPlaySvg from '../svg/clipboard-play.svg';

export interface IClipboardPlayIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ClipboardPlayIcon: FC<IClipboardPlayIconProps> = memo(props => {
  return <ClipboardPlaySvg {...props} />;
});
