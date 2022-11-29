import React, { FC, memo } from 'react';
import FormatHeaderEqualSvg from '../svg/format-header-equal.svg';

export interface IFormatHeaderEqualIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FormatHeaderEqualIcon: FC<IFormatHeaderEqualIconProps> = memo(props => {
  return <FormatHeaderEqualSvg {...props} />;
});
