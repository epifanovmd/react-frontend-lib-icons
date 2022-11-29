import React, { FC, memo } from 'react';
import FormatHeader4Svg from '../svg/format-header-4.svg';

export interface IFormatHeader4IconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FormatHeader4Icon: FC<IFormatHeader4IconProps> = memo(props => {
  return <FormatHeader4Svg {...props} />;
});
