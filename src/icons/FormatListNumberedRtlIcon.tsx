import React, { FC, memo } from 'react';
import FormatListNumberedRtlSvg from '../svg/format-list-numbered-rtl.svg';

export interface IFormatListNumberedRtlIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FormatListNumberedRtlIcon: FC<IFormatListNumberedRtlIconProps> = memo(props => {
  return <FormatListNumberedRtlSvg {...props} />;
});
