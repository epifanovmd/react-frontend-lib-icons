import React, { FC, memo } from 'react';
import FormatAlignLeftSvg from '../svg/format-align-left.svg';

export interface IFormatAlignLeftIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FormatAlignLeftIcon: FC<IFormatAlignLeftIconProps> = memo(props => {
  return <FormatAlignLeftSvg {...props} />;
});
