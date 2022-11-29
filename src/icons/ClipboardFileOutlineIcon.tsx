import React, { FC, memo } from 'react';
import ClipboardFileOutlineSvg from '../svg/clipboard-file-outline.svg';

export interface IClipboardFileOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ClipboardFileOutlineIcon: FC<IClipboardFileOutlineIconProps> = memo(props => {
  return <ClipboardFileOutlineSvg {...props} />;
});
