import React, { FC, memo } from 'react';
import FormatClearSvg from '../svg/format-clear.svg';

export interface IFormatClearIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FormatClearIcon: FC<IFormatClearIconProps> = memo(props => {
  return <FormatClearSvg {...props} />;
});
