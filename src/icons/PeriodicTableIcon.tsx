import React, { FC, memo } from 'react';
import PeriodicTableSvg from '../svg/periodic-table.svg';

export interface IPeriodicTableIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PeriodicTableIcon: FC<IPeriodicTableIconProps> = memo(props => {
  return <PeriodicTableSvg {...props} />;
});
