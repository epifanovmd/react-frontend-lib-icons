import React, { FC, memo } from 'react';
import FormatBoldSvg from '../svg/format-bold.svg';

export interface IFormatBoldIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FormatBoldIcon: FC<IFormatBoldIconProps> = memo(props => {
  return <FormatBoldSvg {...props} />;
});
