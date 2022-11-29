import React, { FC, memo } from 'react';
import StorePlusSvg from '../svg/store-plus.svg';

export interface IStorePlusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const StorePlusIcon: FC<IStorePlusIconProps> = memo(props => {
  return <StorePlusSvg {...props} />;
});
