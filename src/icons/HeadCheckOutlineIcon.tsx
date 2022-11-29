import React, { FC, memo } from 'react';
import HeadCheckOutlineSvg from '../svg/head-check-outline.svg';

export interface IHeadCheckOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HeadCheckOutlineIcon: FC<IHeadCheckOutlineIconProps> = memo(props => {
  return <HeadCheckOutlineSvg {...props} />;
});
