import React, { FC, memo } from 'react';
import PacManSvg from '../svg/pac-man.svg';

export interface IPacManIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PacManIcon: FC<IPacManIconProps> = memo(props => {
  return <PacManSvg {...props} />;
});
