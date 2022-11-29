import React, { FC, memo } from 'react';
import ClipboardArrowDownOutlineSvg from '../svg/clipboard-arrow-down-outline.svg';

export interface IClipboardArrowDownOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ClipboardArrowDownOutlineIcon: FC<IClipboardArrowDownOutlineIconProps> = memo(props => {
  return <ClipboardArrowDownOutlineSvg {...props} />;
});
