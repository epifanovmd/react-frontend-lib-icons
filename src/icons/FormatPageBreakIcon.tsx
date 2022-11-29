import React, { FC, memo } from 'react';
import FormatPageBreakSvg from '../svg/format-page-break.svg';

export interface IFormatPageBreakIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FormatPageBreakIcon: FC<IFormatPageBreakIconProps> = memo(props => {
  return <FormatPageBreakSvg {...props} />;
});
