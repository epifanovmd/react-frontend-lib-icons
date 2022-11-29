import React, { FC, memo } from 'react';
import ClipboardTextOutlineSvg from '../svg/clipboard-text-outline.svg';

export interface IClipboardTextOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ClipboardTextOutlineIcon: FC<IClipboardTextOutlineIconProps> = memo(props => {
  return <ClipboardTextOutlineSvg {...props} />;
});
