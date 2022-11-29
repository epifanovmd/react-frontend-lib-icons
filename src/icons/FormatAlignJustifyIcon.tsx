import React, { FC, memo } from 'react';
import FormatAlignJustifySvg from '../svg/format-align-justify.svg';

export interface IFormatAlignJustifyIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FormatAlignJustifyIcon: FC<IFormatAlignJustifyIconProps> = memo(props => {
  return <FormatAlignJustifySvg {...props} />;
});
