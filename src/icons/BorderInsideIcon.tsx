import React, { FC, memo } from 'react';
import BorderInsideSvg from '../svg/border-inside.svg';

export interface IBorderInsideIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BorderInsideIcon: FC<IBorderInsideIconProps> = memo(props => {
  return <BorderInsideSvg {...props} />;
});
