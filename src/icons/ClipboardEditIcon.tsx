import React, { FC, memo } from 'react';
import ClipboardEditSvg from '../svg/clipboard-edit.svg';

export interface IClipboardEditIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ClipboardEditIcon: FC<IClipboardEditIconProps> = memo(props => {
  return <ClipboardEditSvg {...props} />;
});
