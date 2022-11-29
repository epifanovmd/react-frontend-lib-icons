import React, { FC, memo } from 'react';
import SpiderWebSvg from '../svg/spider-web.svg';

export interface ISpiderWebIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SpiderWebIcon: FC<ISpiderWebIconProps> = memo(props => {
  return <SpiderWebSvg {...props} />;
});
