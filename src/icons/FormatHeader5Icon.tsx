import React, { FC, memo } from 'react';
import FormatHeader5Svg from '../svg/format-header-5.svg';

export interface IFormatHeader5IconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FormatHeader5Icon: FC<IFormatHeader5IconProps> = memo(props => {
  return <FormatHeader5Svg {...props} />;
});
