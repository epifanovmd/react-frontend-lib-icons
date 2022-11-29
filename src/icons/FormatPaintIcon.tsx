import React, { FC, memo } from 'react';
import FormatPaintSvg from '../svg/format-paint.svg';

export interface IFormatPaintIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FormatPaintIcon: FC<IFormatPaintIconProps> = memo(props => {
  return <FormatPaintSvg {...props} />;
});
