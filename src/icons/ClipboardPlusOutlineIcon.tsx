import React, { FC, memo } from 'react';
import ClipboardPlusOutlineSvg from '../svg/clipboard-plus-outline.svg';

export interface IClipboardPlusOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ClipboardPlusOutlineIcon: FC<IClipboardPlusOutlineIconProps> = memo(props => {
  return <ClipboardPlusOutlineSvg {...props} />;
});
