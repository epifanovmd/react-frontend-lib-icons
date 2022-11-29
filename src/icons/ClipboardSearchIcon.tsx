import React, { FC, memo } from 'react';
import ClipboardSearchSvg from '../svg/clipboard-search.svg';

export interface IClipboardSearchIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ClipboardSearchIcon: FC<IClipboardSearchIconProps> = memo(props => {
  return <ClipboardSearchSvg {...props} />;
});
