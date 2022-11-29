import React, { FC, memo } from 'react';
import FormatFloatLeftSvg from '../svg/format-float-left.svg';

export interface IFormatFloatLeftIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FormatFloatLeftIcon: FC<IFormatFloatLeftIconProps> = memo(props => {
  return <FormatFloatLeftSvg {...props} />;
});
