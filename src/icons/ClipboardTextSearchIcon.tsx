import React, { FC, memo } from 'react';
import ClipboardTextSearchSvg from '../svg/clipboard-text-search.svg';

export interface IClipboardTextSearchIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ClipboardTextSearchIcon: FC<IClipboardTextSearchIconProps> = memo(props => {
  return <ClipboardTextSearchSvg {...props} />;
});
