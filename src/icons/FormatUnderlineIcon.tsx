import React, { FC, memo } from 'react';
import FormatUnderlineSvg from '../svg/format-underline.svg';

export interface IFormatUnderlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FormatUnderlineIcon: FC<IFormatUnderlineIconProps> = memo(props => {
  return <FormatUnderlineSvg {...props} />;
});
