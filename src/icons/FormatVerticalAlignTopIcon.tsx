import React, { FC, memo } from 'react';
import FormatVerticalAlignTopSvg from '../svg/format-vertical-align-top.svg';

export interface IFormatVerticalAlignTopIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FormatVerticalAlignTopIcon: FC<IFormatVerticalAlignTopIconProps> = memo(props => {
  return <FormatVerticalAlignTopSvg {...props} />;
});
