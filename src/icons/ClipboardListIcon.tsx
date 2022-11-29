import React, { FC, memo } from 'react';
import ClipboardListSvg from '../svg/clipboard-list.svg';

export interface IClipboardListIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ClipboardListIcon: FC<IClipboardListIconProps> = memo(props => {
  return <ClipboardListSvg {...props} />;
});
