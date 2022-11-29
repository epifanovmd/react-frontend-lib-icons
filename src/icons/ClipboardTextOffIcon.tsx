import React, { FC, memo } from 'react';
import ClipboardTextOffSvg from '../svg/clipboard-text-off.svg';

export interface IClipboardTextOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ClipboardTextOffIcon: FC<IClipboardTextOffIconProps> = memo(props => {
  return <ClipboardTextOffSvg {...props} />;
});
