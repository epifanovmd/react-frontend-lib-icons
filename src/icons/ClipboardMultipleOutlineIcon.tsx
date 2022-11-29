import React, { FC, memo } from 'react';
import ClipboardMultipleOutlineSvg from '../svg/clipboard-multiple-outline.svg';

export interface IClipboardMultipleOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ClipboardMultipleOutlineIcon: FC<IClipboardMultipleOutlineIconProps> = memo(props => {
  return <ClipboardMultipleOutlineSvg {...props} />;
});
