import React, { FC, memo } from 'react';
import BorderTopSvg from '../svg/border-top.svg';

export interface IBorderTopIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BorderTopIcon: FC<IBorderTopIconProps> = memo(props => {
  return <BorderTopSvg {...props} />;
});
