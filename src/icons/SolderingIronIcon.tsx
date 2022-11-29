import React, { FC, memo } from 'react';
import SolderingIronSvg from '../svg/soldering-iron.svg';

export interface ISolderingIronIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SolderingIronIcon: FC<ISolderingIronIconProps> = memo(props => {
  return <SolderingIronSvg {...props} />;
});
