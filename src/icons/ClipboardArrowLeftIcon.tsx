import React, { FC, memo } from 'react';
import ClipboardArrowLeftSvg from '../svg/clipboard-arrow-left.svg';

export interface IClipboardArrowLeftIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ClipboardArrowLeftIcon: FC<IClipboardArrowLeftIconProps> = memo(props => {
  return <ClipboardArrowLeftSvg {...props} />;
});
