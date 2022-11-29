import React, { FC, memo } from 'react';
import FormatTextboxSvg from '../svg/format-textbox.svg';

export interface IFormatTextboxIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FormatTextboxIcon: FC<IFormatTextboxIconProps> = memo(props => {
  return <FormatTextboxSvg {...props} />;
});
