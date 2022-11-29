import React, { FC, memo } from 'react';
import FormatItalicSvg from '../svg/format-italic.svg';

export interface IFormatItalicIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FormatItalicIcon: FC<IFormatItalicIconProps> = memo(props => {
  return <FormatItalicSvg {...props} />;
});
