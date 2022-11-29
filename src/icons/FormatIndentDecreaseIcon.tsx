import React, { FC, memo } from 'react';
import FormatIndentDecreaseSvg from '../svg/format-indent-decrease.svg';

export interface IFormatIndentDecreaseIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FormatIndentDecreaseIcon: FC<IFormatIndentDecreaseIconProps> = memo(props => {
  return <FormatIndentDecreaseSvg {...props} />;
});
