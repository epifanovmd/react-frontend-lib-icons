import React, { FC, memo } from 'react';
import ClipboardCheckSvg from '../svg/clipboard-check.svg';

export interface IClipboardCheckIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ClipboardCheckIcon: FC<IClipboardCheckIconProps> = memo(props => {
  return <ClipboardCheckSvg {...props} />;
});
