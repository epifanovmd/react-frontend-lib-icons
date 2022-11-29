import React, { FC, memo } from 'react';
import FormatOverlineSvg from '../svg/format-overline.svg';

export interface IFormatOverlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FormatOverlineIcon: FC<IFormatOverlineIconProps> = memo(props => {
  return <FormatOverlineSvg {...props} />;
});
