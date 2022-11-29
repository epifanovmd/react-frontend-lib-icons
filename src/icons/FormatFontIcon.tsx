import React, { FC, memo } from 'react';
import FormatFontSvg from '../svg/format-font.svg';

export interface IFormatFontIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FormatFontIcon: FC<IFormatFontIconProps> = memo(props => {
  return <FormatFontSvg {...props} />;
});
