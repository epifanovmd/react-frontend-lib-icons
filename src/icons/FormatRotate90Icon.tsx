import React, { FC, memo } from 'react';
import FormatRotate90Svg from '../svg/format-rotate-90.svg';

export interface IFormatRotate90IconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FormatRotate90Icon: FC<IFormatRotate90IconProps> = memo(props => {
  return <FormatRotate90Svg {...props} />;
});
