import React, { FC, memo } from 'react';
import ClipboardOutlineSvg from '../svg/clipboard-outline.svg';

export interface IClipboardOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ClipboardOutlineIcon: FC<IClipboardOutlineIconProps> = memo(props => {
  return <ClipboardOutlineSvg {...props} />;
});
