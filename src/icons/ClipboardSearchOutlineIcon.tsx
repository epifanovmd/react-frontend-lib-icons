import React, { FC, memo } from 'react';
import ClipboardSearchOutlineSvg from '../svg/clipboard-search-outline.svg';

export interface IClipboardSearchOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ClipboardSearchOutlineIcon: FC<IClipboardSearchOutlineIconProps> = memo(props => {
  return <ClipboardSearchOutlineSvg {...props} />;
});
