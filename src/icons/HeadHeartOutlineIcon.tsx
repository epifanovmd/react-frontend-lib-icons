import React, { FC, memo } from 'react';
import HeadHeartOutlineSvg from '../svg/head-heart-outline.svg';

export interface IHeadHeartOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HeadHeartOutlineIcon: FC<IHeadHeartOutlineIconProps> = memo(props => {
  return <HeadHeartOutlineSvg {...props} />;
});
