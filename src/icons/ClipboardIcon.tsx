import React, { FC, memo } from 'react';
import ClipboardSvg from '../svg/clipboard.svg';

export interface IClipboardIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ClipboardIcon: FC<IClipboardIconProps> = memo(props => {
  return <ClipboardSvg {...props} />;
});
