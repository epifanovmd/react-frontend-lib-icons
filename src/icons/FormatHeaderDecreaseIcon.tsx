import React, { FC, memo } from 'react';
import FormatHeaderDecreaseSvg from '../svg/format-header-decrease.svg';

export interface IFormatHeaderDecreaseIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FormatHeaderDecreaseIcon: FC<IFormatHeaderDecreaseIconProps> = memo(props => {
  return <FormatHeaderDecreaseSvg {...props} />;
});
