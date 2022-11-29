import React, { FC, memo } from 'react';
import ClipboardArrowLeftOutlineSvg from '../svg/clipboard-arrow-left-outline.svg';

export interface IClipboardArrowLeftOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ClipboardArrowLeftOutlineIcon: FC<IClipboardArrowLeftOutlineIconProps> = memo(props => {
  return <ClipboardArrowLeftOutlineSvg {...props} />;
});
