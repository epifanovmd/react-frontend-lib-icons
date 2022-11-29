import React, { FC, memo } from 'react';
import ClipboardEditOutlineSvg from '../svg/clipboard-edit-outline.svg';

export interface IClipboardEditOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ClipboardEditOutlineIcon: FC<IClipboardEditOutlineIconProps> = memo(props => {
  return <ClipboardEditOutlineSvg {...props} />;
});
