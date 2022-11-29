import React, { FC, memo } from 'react';
import FormatAlignMiddleSvg from '../svg/format-align-middle.svg';

export interface IFormatAlignMiddleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FormatAlignMiddleIcon: FC<IFormatAlignMiddleIconProps> = memo(props => {
  return <FormatAlignMiddleSvg {...props} />;
});
