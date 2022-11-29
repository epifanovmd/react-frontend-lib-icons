import React, { FC, memo } from 'react';
import FormatColumnsSvg from '../svg/format-columns.svg';

export interface IFormatColumnsIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FormatColumnsIcon: FC<IFormatColumnsIconProps> = memo(props => {
  return <FormatColumnsSvg {...props} />;
});
