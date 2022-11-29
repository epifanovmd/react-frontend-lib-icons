import React, { FC, memo } from 'react';
import ClipboardTextMultipleSvg from '../svg/clipboard-text-multiple.svg';

export interface IClipboardTextMultipleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ClipboardTextMultipleIcon: FC<IClipboardTextMultipleIconProps> = memo(props => {
  return <ClipboardTextMultipleSvg {...props} />;
});
