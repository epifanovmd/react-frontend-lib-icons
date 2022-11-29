import React, { FC, memo } from 'react';
import ClipboardTextSvg from '../svg/clipboard-text.svg';

export interface IClipboardTextIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ClipboardTextIcon: FC<IClipboardTextIconProps> = memo(props => {
  return <ClipboardTextSvg {...props} />;
});
