import React, { FC, memo } from 'react';
import FormatFontSizeDecreaseSvg from '../svg/format-font-size-decrease.svg';

export interface IFormatFontSizeDecreaseIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FormatFontSizeDecreaseIcon: FC<IFormatFontSizeDecreaseIconProps> = memo(props => {
  return <FormatFontSizeDecreaseSvg {...props} />;
});
