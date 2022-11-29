import React, { FC, memo } from 'react';
import FormatColorTextSvg from '../svg/format-color-text.svg';

export interface IFormatColorTextIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FormatColorTextIcon: FC<IFormatColorTextIconProps> = memo(props => {
  return <FormatColorTextSvg {...props} />;
});
