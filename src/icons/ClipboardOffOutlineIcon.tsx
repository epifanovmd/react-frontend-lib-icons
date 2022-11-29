import React, { FC, memo } from 'react';
import ClipboardOffOutlineSvg from '../svg/clipboard-off-outline.svg';

export interface IClipboardOffOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ClipboardOffOutlineIcon: FC<IClipboardOffOutlineIconProps> = memo(props => {
  return <ClipboardOffOutlineSvg {...props} />;
});
