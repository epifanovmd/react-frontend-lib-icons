import React, { FC, memo } from 'react';
import ClipboardPlayMultipleSvg from '../svg/clipboard-play-multiple.svg';

export interface IClipboardPlayMultipleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ClipboardPlayMultipleIcon: FC<IClipboardPlayMultipleIconProps> = memo(props => {
  return <ClipboardPlayMultipleSvg {...props} />;
});
