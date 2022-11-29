import React, { FC, memo } from 'react';
import FormatHeader6Svg from '../svg/format-header-6.svg';

export interface IFormatHeader6IconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FormatHeader6Icon: FC<IFormatHeader6IconProps> = memo(props => {
  return <FormatHeader6Svg {...props} />;
});
