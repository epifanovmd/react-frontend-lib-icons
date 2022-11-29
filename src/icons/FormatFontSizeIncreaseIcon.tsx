import React, { FC, memo } from 'react';
import FormatFontSizeIncreaseSvg from '../svg/format-font-size-increase.svg';

export interface IFormatFontSizeIncreaseIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FormatFontSizeIncreaseIcon: FC<IFormatFontSizeIncreaseIconProps> = memo(props => {
  return <FormatFontSizeIncreaseSvg {...props} />;
});
