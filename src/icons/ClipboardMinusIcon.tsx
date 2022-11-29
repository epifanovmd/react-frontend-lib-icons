import React, { FC, memo } from 'react';
import ClipboardMinusSvg from '../svg/clipboard-minus.svg';

export interface IClipboardMinusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ClipboardMinusIcon: FC<IClipboardMinusIconProps> = memo(props => {
  return <ClipboardMinusSvg {...props} />;
});
