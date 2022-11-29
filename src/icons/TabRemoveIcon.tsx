import React, { FC, memo } from 'react';
import TabRemoveSvg from '../svg/tab-remove.svg';

export interface ITabRemoveIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TabRemoveIcon: FC<ITabRemoveIconProps> = memo(props => {
  return <TabRemoveSvg {...props} />;
});
