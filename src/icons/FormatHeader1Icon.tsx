import React, { FC, memo } from 'react';
import FormatHeader1Svg from '../svg/format-header-1.svg';

export interface IFormatHeader1IconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FormatHeader1Icon: FC<IFormatHeader1IconProps> = memo(props => {
  return <FormatHeader1Svg {...props} />;
});
