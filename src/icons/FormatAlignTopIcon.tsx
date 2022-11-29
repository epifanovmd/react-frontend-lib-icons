import React, { FC, memo } from 'react';
import FormatAlignTopSvg from '../svg/format-align-top.svg';

export interface IFormatAlignTopIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FormatAlignTopIcon: FC<IFormatAlignTopIconProps> = memo(props => {
  return <FormatAlignTopSvg {...props} />;
});
