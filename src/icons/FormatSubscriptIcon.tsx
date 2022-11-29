import React, { FC, memo } from 'react';
import FormatSubscriptSvg from '../svg/format-subscript.svg';

export interface IFormatSubscriptIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FormatSubscriptIcon: FC<IFormatSubscriptIconProps> = memo(props => {
  return <FormatSubscriptSvg {...props} />;
});
