import React, { FC, memo } from 'react';
import ClipboardArrowUpSvg from '../svg/clipboard-arrow-up.svg';

export interface IClipboardArrowUpIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ClipboardArrowUpIcon: FC<IClipboardArrowUpIconProps> = memo(props => {
  return <ClipboardArrowUpSvg {...props} />;
});
