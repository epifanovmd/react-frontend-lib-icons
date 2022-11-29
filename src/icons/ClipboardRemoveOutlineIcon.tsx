import React, { FC, memo } from 'react';
import ClipboardRemoveOutlineSvg from '../svg/clipboard-remove-outline.svg';

export interface IClipboardRemoveOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ClipboardRemoveOutlineIcon: FC<IClipboardRemoveOutlineIconProps> = memo(props => {
  return <ClipboardRemoveOutlineSvg {...props} />;
});
