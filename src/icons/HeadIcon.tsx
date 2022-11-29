import React, { FC, memo } from 'react';
import HeadSvg from '../svg/head.svg';

export interface IHeadIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HeadIcon: FC<IHeadIconProps> = memo(props => {
  return <HeadSvg {...props} />;
});
