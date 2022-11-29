import React, { FC, memo } from 'react';
import FormatTextSvg from '../svg/format-text.svg';

export interface IFormatTextIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FormatTextIcon: FC<IFormatTextIconProps> = memo(props => {
  return <FormatTextSvg {...props} />;
});
