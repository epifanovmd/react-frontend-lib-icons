import React, { FC, memo } from 'react';
import FormatHorizontalAlignRightSvg from '../svg/format-horizontal-align-right.svg';

export interface IFormatHorizontalAlignRightIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FormatHorizontalAlignRightIcon: FC<IFormatHorizontalAlignRightIconProps> = memo(props => {
  return <FormatHorizontalAlignRightSvg {...props} />;
});
