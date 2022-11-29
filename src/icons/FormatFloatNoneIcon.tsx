import React, { FC, memo } from 'react';
import FormatFloatNoneSvg from '../svg/format-float-none.svg';

export interface IFormatFloatNoneIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FormatFloatNoneIcon: FC<IFormatFloatNoneIconProps> = memo(props => {
  return <FormatFloatNoneSvg {...props} />;
});
