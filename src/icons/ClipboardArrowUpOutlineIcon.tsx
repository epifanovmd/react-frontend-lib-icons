import React, { FC, memo } from 'react';
import ClipboardArrowUpOutlineSvg from '../svg/clipboard-arrow-up-outline.svg';

export interface IClipboardArrowUpOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ClipboardArrowUpOutlineIcon: FC<IClipboardArrowUpOutlineIconProps> = memo(props => {
  return <ClipboardArrowUpOutlineSvg {...props} />;
});
