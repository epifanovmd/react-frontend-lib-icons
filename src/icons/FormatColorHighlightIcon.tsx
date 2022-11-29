import React, { FC, memo } from 'react';
import FormatColorHighlightSvg from '../svg/format-color-highlight.svg';

export interface IFormatColorHighlightIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FormatColorHighlightIcon: FC<IFormatColorHighlightIconProps> = memo(props => {
  return <FormatColorHighlightSvg {...props} />;
});
