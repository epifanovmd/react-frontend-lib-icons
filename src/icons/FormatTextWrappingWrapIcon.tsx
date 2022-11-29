import React, { FC, memo } from 'react';
import FormatTextWrappingWrapSvg from '../svg/format-text-wrapping-wrap.svg';

export interface IFormatTextWrappingWrapIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FormatTextWrappingWrapIcon: FC<IFormatTextWrappingWrapIconProps> = memo(props => {
  return <FormatTextWrappingWrapSvg {...props} />;
});
