import React, { FC, memo } from 'react';
import YeastSvg from '../svg/yeast.svg';

export interface IYeastIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const YeastIcon: FC<IYeastIconProps> = memo(props => {
  return <YeastSvg {...props} />;
});
