import React, { FC, memo } from 'react';
import FormatWrapSquareSvg from '../svg/format-wrap-square.svg';

export interface IFormatWrapSquareIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FormatWrapSquareIcon: FC<IFormatWrapSquareIconProps> = memo(props => {
  return <FormatWrapSquareSvg {...props} />;
});
