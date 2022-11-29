import React, { FC, memo } from 'react';
import BellPlusSvg from '../svg/bell-plus.svg';

export interface IBellPlusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BellPlusIcon: FC<IBellPlusIconProps> = memo(props => {
  return <BellPlusSvg {...props} />;
});
