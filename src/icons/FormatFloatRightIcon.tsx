import React, { FC, memo } from 'react';
import FormatFloatRightSvg from '../svg/format-float-right.svg';

export interface IFormatFloatRightIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FormatFloatRightIcon: FC<IFormatFloatRightIconProps> = memo(props => {
  return <FormatFloatRightSvg {...props} />;
});
