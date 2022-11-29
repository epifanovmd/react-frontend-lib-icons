import React, { FC, memo } from 'react';
import ClipboardTextMultipleOutlineSvg from '../svg/clipboard-text-multiple-outline.svg';

export interface IClipboardTextMultipleOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ClipboardTextMultipleOutlineIcon: FC<IClipboardTextMultipleOutlineIconProps> = memo(props => {
  return <ClipboardTextMultipleOutlineSvg {...props} />;
});
