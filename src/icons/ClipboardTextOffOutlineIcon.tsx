import React, { FC, memo } from 'react';
import ClipboardTextOffOutlineSvg from '../svg/clipboard-text-off-outline.svg';

export interface IClipboardTextOffOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ClipboardTextOffOutlineIcon: FC<IClipboardTextOffOutlineIconProps> = memo(props => {
  return <ClipboardTextOffOutlineSvg {...props} />;
});
