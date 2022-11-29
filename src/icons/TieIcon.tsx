import React, { FC, memo } from 'react';
import TieSvg from '../svg/tie.svg';

export interface ITieIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TieIcon: FC<ITieIconProps> = memo(props => {
  return <TieSvg {...props} />;
});
