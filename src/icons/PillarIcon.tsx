import React, { FC, memo } from 'react';
import PillarSvg from '../svg/pillar.svg';

export interface IPillarIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PillarIcon: FC<IPillarIconProps> = memo(props => {
  return <PillarSvg {...props} />;
});
