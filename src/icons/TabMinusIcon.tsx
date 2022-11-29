import React, { FC, memo } from 'react';
import TabMinusSvg from '../svg/tab-minus.svg';

export interface ITabMinusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TabMinusIcon: FC<ITabMinusIconProps> = memo(props => {
  return <TabMinusSvg {...props} />;
});
