import React, { FC, memo } from 'react';
import ClipboardMinusOutlineSvg from '../svg/clipboard-minus-outline.svg';

export interface IClipboardMinusOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ClipboardMinusOutlineIcon: FC<IClipboardMinusOutlineIconProps> = memo(props => {
  return <ClipboardMinusOutlineSvg {...props} />;
});
