import React, { FC, memo } from 'react';
import HeadDotsHorizontalSvg from '../svg/head-dots-horizontal.svg';

export interface IHeadDotsHorizontalIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HeadDotsHorizontalIcon: FC<IHeadDotsHorizontalIconProps> = memo(props => {
  return <HeadDotsHorizontalSvg {...props} />;
});
