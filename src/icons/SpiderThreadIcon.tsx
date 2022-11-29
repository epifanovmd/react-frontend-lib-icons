import React, { FC, memo } from 'react';
import SpiderThreadSvg from '../svg/spider-thread.svg';

export interface ISpiderThreadIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SpiderThreadIcon: FC<ISpiderThreadIconProps> = memo(props => {
  return <SpiderThreadSvg {...props} />;
});
