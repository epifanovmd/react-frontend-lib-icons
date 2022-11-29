import React, { FC, memo } from 'react';
import FormatListNumberedSvg from '../svg/format-list-numbered.svg';

export interface IFormatListNumberedIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FormatListNumberedIcon: FC<IFormatListNumberedIconProps> = memo(props => {
  return <FormatListNumberedSvg {...props} />;
});
