import React, { FC, memo } from 'react';
import ClipboardAccountOutlineSvg from '../svg/clipboard-account-outline.svg';

export interface IClipboardAccountOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ClipboardAccountOutlineIcon: FC<IClipboardAccountOutlineIconProps> = memo(props => {
  return <ClipboardAccountOutlineSvg {...props} />;
});
