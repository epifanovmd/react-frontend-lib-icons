import React, { FC, memo } from 'react';
import FormatTextWrappingClipSvg from '../svg/format-text-wrapping-clip.svg';

export interface IFormatTextWrappingClipIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FormatTextWrappingClipIcon: FC<IFormatTextWrappingClipIconProps> = memo(props => {
  return <FormatTextWrappingClipSvg {...props} />;
});
