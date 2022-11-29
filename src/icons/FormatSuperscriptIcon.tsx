import React, { FC, memo } from 'react';
import FormatSuperscriptSvg from '../svg/format-superscript.svg';

export interface IFormatSuperscriptIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FormatSuperscriptIcon: FC<IFormatSuperscriptIconProps> = memo(props => {
  return <FormatSuperscriptSvg {...props} />;
});
