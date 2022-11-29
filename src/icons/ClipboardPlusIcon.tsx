import React, { FC, memo } from 'react';
import ClipboardPlusSvg from '../svg/clipboard-plus.svg';

export interface IClipboardPlusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ClipboardPlusIcon: FC<IClipboardPlusIconProps> = memo(props => {
  return <ClipboardPlusSvg {...props} />;
});
