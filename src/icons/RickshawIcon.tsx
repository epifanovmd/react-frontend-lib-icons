import React, { FC, memo } from 'react';
import RickshawSvg from '../svg/rickshaw.svg';

export interface IRickshawIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const RickshawIcon: FC<IRickshawIconProps> = memo(props => {
  return <RickshawSvg {...props} />;
});
