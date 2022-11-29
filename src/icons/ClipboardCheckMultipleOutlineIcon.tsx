import React, { FC, memo } from 'react';
import ClipboardCheckMultipleOutlineSvg from '../svg/clipboard-check-multiple-outline.svg';

export interface IClipboardCheckMultipleOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ClipboardCheckMultipleOutlineIcon: FC<IClipboardCheckMultipleOutlineIconProps> = memo(props => {
  return <ClipboardCheckMultipleOutlineSvg {...props} />;
});
