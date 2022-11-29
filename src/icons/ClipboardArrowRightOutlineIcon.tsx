import React, { FC, memo } from 'react';
import ClipboardArrowRightOutlineSvg from '../svg/clipboard-arrow-right-outline.svg';

export interface IClipboardArrowRightOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ClipboardArrowRightOutlineIcon: FC<IClipboardArrowRightOutlineIconProps> = memo(props => {
  return <ClipboardArrowRightOutlineSvg {...props} />;
});
