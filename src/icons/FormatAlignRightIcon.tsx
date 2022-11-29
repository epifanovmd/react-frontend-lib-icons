import React, { FC, memo } from 'react';
import FormatAlignRightSvg from '../svg/format-align-right.svg';

export interface IFormatAlignRightIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FormatAlignRightIcon: FC<IFormatAlignRightIconProps> = memo(props => {
  return <FormatAlignRightSvg {...props} />;
});
