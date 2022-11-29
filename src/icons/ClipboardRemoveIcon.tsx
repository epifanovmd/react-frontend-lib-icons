import React, { FC, memo } from 'react';
import ClipboardRemoveSvg from '../svg/clipboard-remove.svg';

export interface IClipboardRemoveIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ClipboardRemoveIcon: FC<IClipboardRemoveIconProps> = memo(props => {
  return <ClipboardRemoveSvg {...props} />;
});
