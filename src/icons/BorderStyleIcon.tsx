import React, { FC, memo } from 'react';
import BorderStyleSvg from '../svg/border-style.svg';

export interface IBorderStyleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BorderStyleIcon: FC<IBorderStyleIconProps> = memo(props => {
  return <BorderStyleSvg {...props} />;
});
