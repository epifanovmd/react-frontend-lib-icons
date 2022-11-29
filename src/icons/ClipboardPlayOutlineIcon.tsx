import React, { FC, memo } from 'react';
import ClipboardPlayOutlineSvg from '../svg/clipboard-play-outline.svg';

export interface IClipboardPlayOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ClipboardPlayOutlineIcon: FC<IClipboardPlayOutlineIconProps> = memo(props => {
  return <ClipboardPlayOutlineSvg {...props} />;
});
