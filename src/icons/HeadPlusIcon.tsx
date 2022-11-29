import React, { FC, memo } from 'react';
import HeadPlusSvg from '../svg/head-plus.svg';

export interface IHeadPlusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HeadPlusIcon: FC<IHeadPlusIconProps> = memo(props => {
  return <HeadPlusSvg {...props} />;
});
