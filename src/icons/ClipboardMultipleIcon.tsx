import React, { FC, memo } from 'react';
import ClipboardMultipleSvg from '../svg/clipboard-multiple.svg';

export interface IClipboardMultipleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ClipboardMultipleIcon: FC<IClipboardMultipleIconProps> = memo(props => {
  return <ClipboardMultipleSvg {...props} />;
});
