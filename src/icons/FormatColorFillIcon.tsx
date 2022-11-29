import React, { FC, memo } from 'react';
import FormatColorFillSvg from '../svg/format-color-fill.svg';

export interface IFormatColorFillIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FormatColorFillIcon: FC<IFormatColorFillIconProps> = memo(props => {
  return <FormatColorFillSvg {...props} />;
});
