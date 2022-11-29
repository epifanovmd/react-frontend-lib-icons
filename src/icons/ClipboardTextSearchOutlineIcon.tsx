import React, { FC, memo } from 'react';
import ClipboardTextSearchOutlineSvg from '../svg/clipboard-text-search-outline.svg';

export interface IClipboardTextSearchOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ClipboardTextSearchOutlineIcon: FC<IClipboardTextSearchOutlineIconProps> = memo(props => {
  return <ClipboardTextSearchOutlineSvg {...props} />;
});
