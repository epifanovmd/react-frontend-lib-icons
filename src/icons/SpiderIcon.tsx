import React, { FC, memo } from 'react';
import SpiderSvg from '../svg/spider.svg';

export interface ISpiderIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SpiderIcon: FC<ISpiderIconProps> = memo(props => {
  return <SpiderSvg {...props} />;
});
