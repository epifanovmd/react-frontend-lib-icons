import React, { FC, memo } from 'react';
import ClipboardFileSvg from '../svg/clipboard-file.svg';

export interface IClipboardFileIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ClipboardFileIcon: FC<IClipboardFileIconProps> = memo(props => {
  return <ClipboardFileSvg {...props} />;
});
