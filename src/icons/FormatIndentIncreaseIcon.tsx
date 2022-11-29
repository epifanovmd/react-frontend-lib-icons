import React, { FC, memo } from 'react';
import FormatIndentIncreaseSvg from '../svg/format-indent-increase.svg';

export interface IFormatIndentIncreaseIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FormatIndentIncreaseIcon: FC<IFormatIndentIncreaseIconProps> = memo(props => {
  return <FormatIndentIncreaseSvg {...props} />;
});
