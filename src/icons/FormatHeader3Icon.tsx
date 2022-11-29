import React, { FC, memo } from 'react';
import FormatHeader3Svg from '../svg/format-header-3.svg';

export interface IFormatHeader3IconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FormatHeader3Icon: FC<IFormatHeader3IconProps> = memo(props => {
  return <FormatHeader3Svg {...props} />;
});
