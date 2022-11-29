import React, { FC, memo } from 'react';
import EggSvg from '../svg/egg.svg';

export interface IEggIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const EggIcon: FC<IEggIconProps> = memo(props => {
  return <EggSvg {...props} />;
});
