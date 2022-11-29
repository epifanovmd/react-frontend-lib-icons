import React, { FC, memo } from 'react';
import FormatHeaderIncreaseSvg from '../svg/format-header-increase.svg';

export interface IFormatHeaderIncreaseIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FormatHeaderIncreaseIcon: FC<IFormatHeaderIncreaseIconProps> = memo(props => {
  return <FormatHeaderIncreaseSvg {...props} />;
});
