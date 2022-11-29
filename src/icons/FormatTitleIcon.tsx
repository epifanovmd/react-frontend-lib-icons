import React, { FC, memo } from 'react';
import FormatTitleSvg from '../svg/format-title.svg';

export interface IFormatTitleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FormatTitleIcon: FC<IFormatTitleIconProps> = memo(props => {
  return <FormatTitleSvg {...props} />;
});
