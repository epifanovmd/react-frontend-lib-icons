import React, { FC, memo } from 'react';
import FormatLineWeightSvg from '../svg/format-line-weight.svg';

export interface IFormatLineWeightIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FormatLineWeightIcon: FC<IFormatLineWeightIconProps> = memo(props => {
  return <FormatLineWeightSvg {...props} />;
});
