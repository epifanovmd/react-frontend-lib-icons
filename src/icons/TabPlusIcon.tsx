import React, { FC, memo } from 'react';
import TabPlusSvg from '../svg/tab-plus.svg';

export interface ITabPlusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TabPlusIcon: FC<ITabPlusIconProps> = memo(props => {
  return <TabPlusSvg {...props} />;
});
