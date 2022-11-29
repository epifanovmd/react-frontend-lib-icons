import React, { FC, memo } from 'react';
import FormatHorizontalAlignLeftSvg from '../svg/format-horizontal-align-left.svg';

export interface IFormatHorizontalAlignLeftIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FormatHorizontalAlignLeftIcon: FC<IFormatHorizontalAlignLeftIconProps> = memo(props => {
  return <FormatHorizontalAlignLeftSvg {...props} />;
});
