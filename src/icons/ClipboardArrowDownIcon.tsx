import React, { FC, memo } from 'react';
import ClipboardArrowDownSvg from '../svg/clipboard-arrow-down.svg';

export interface IClipboardArrowDownIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ClipboardArrowDownIcon: FC<IClipboardArrowDownIconProps> = memo(props => {
  return <ClipboardArrowDownSvg {...props} />;
});
