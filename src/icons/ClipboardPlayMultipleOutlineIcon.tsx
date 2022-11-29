import React, { FC, memo } from 'react';
import ClipboardPlayMultipleOutlineSvg from '../svg/clipboard-play-multiple-outline.svg';

export interface IClipboardPlayMultipleOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ClipboardPlayMultipleOutlineIcon: FC<IClipboardPlayMultipleOutlineIconProps> = memo(props => {
  return <ClipboardPlayMultipleOutlineSvg {...props} />;
});
