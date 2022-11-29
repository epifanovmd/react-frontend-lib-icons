import React, { FC, memo } from 'react';
import HeadDotsHorizontalOutlineSvg from '../svg/head-dots-horizontal-outline.svg';

export interface IHeadDotsHorizontalOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HeadDotsHorizontalOutlineIcon: FC<IHeadDotsHorizontalOutlineIconProps> = memo(props => {
  return <HeadDotsHorizontalOutlineSvg {...props} />;
});
