import React, { FC, memo } from 'react';
import ClipboardCheckOutlineSvg from '../svg/clipboard-check-outline.svg';

export interface IClipboardCheckOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ClipboardCheckOutlineIcon: FC<IClipboardCheckOutlineIconProps> = memo(props => {
  return <ClipboardCheckOutlineSvg {...props} />;
});
