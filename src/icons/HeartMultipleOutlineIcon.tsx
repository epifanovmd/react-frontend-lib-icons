import React, { FC, memo } from 'react';
import HeartMultipleOutlineSvg from '../svg/heart-multiple-outline.svg';

export interface IHeartMultipleOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HeartMultipleOutlineIcon: FC<IHeartMultipleOutlineIconProps> = memo(props => {
  return <HeartMultipleOutlineSvg {...props} />;
});
