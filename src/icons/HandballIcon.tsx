import React, { FC, memo } from 'react';
import HandballSvg from '../svg/handball.svg';

export interface IHandballIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HandballIcon: FC<IHandballIconProps> = memo(props => {
  return <HandballSvg {...props} />;
});
