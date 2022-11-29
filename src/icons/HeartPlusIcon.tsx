import React, { FC, memo } from 'react';
import HeartPlusSvg from '../svg/heart-plus.svg';

export interface IHeartPlusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HeartPlusIcon: FC<IHeartPlusIconProps> = memo(props => {
  return <HeartPlusSvg {...props} />;
});
