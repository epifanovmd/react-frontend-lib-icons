import React, { FC, memo } from 'react';
import ClipboardListOutlineSvg from '../svg/clipboard-list-outline.svg';

export interface IClipboardListOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ClipboardListOutlineIcon: FC<IClipboardListOutlineIconProps> = memo(props => {
  return <ClipboardListOutlineSvg {...props} />;
});
