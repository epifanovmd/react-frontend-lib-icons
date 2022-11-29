import React, { FC, memo } from 'react';
import EiffelTowerSvg from '../svg/eiffel-tower.svg';

export interface IEiffelTowerIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const EiffelTowerIcon: FC<IEiffelTowerIconProps> = memo(props => {
  return <EiffelTowerSvg {...props} />;
});
