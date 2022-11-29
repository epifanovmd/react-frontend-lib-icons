import React, { FC, memo } from 'react';
import LingerieSvg from '../svg/lingerie.svg';

export interface ILingerieIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const LingerieIcon: FC<ILingerieIconProps> = memo(props => {
  return <LingerieSvg {...props} />;
});
