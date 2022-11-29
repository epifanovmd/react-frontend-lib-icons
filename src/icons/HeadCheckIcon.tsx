import React, { FC, memo } from 'react';
import HeadCheckSvg from '../svg/head-check.svg';

export interface IHeadCheckIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HeadCheckIcon: FC<IHeadCheckIconProps> = memo(props => {
  return <HeadCheckSvg {...props} />;
});
