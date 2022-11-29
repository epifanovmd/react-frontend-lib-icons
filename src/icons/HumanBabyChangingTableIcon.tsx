import React, { FC, memo } from 'react';
import HumanBabyChangingTableSvg from '../svg/human-baby-changing-table.svg';

export interface IHumanBabyChangingTableIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HumanBabyChangingTableIcon: FC<IHumanBabyChangingTableIconProps> = memo(props => {
  return <HumanBabyChangingTableSvg {...props} />;
});
