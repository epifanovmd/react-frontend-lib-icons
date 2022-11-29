import React, { FC, memo } from 'react';
import FormatTextWrappingOverflowSvg from '../svg/format-text-wrapping-overflow.svg';

export interface IFormatTextWrappingOverflowIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FormatTextWrappingOverflowIcon: FC<IFormatTextWrappingOverflowIconProps> = memo(props => {
  return <FormatTextWrappingOverflowSvg {...props} />;
});
