import React, { FC, memo } from 'react';
import ClipboardArrowRightSvg from '../svg/clipboard-arrow-right.svg';

export interface IClipboardArrowRightIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ClipboardArrowRightIcon: FC<IClipboardArrowRightIconProps> = memo(props => {
  return <ClipboardArrowRightSvg {...props} />;
});
