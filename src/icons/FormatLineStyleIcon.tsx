import React, { FC, memo } from 'react';
import FormatLineStyleSvg from '../svg/format-line-style.svg';

export interface IFormatLineStyleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FormatLineStyleIcon: FC<IFormatLineStyleIconProps> = memo(props => {
  return <FormatLineStyleSvg {...props} />;
});
