import React, { FC, memo } from 'react';
import YinYangSvg from '../svg/yin-yang.svg';

export interface IYinYangIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const YinYangIcon: FC<IYinYangIconProps> = memo(props => {
  return <YinYangSvg {...props} />;
});
