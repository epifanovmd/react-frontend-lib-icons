import React, { FC, memo } from 'react';
import FormatLineHeightSvg from '../svg/format-line-height.svg';

export interface IFormatLineHeightIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FormatLineHeightIcon: FC<IFormatLineHeightIconProps> = memo(props => {
  return <FormatLineHeightSvg {...props} />;
});
