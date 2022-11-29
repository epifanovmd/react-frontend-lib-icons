import React, { FC, memo } from 'react';
import DisqusSvg from '../svg/disqus.svg';

export interface IDisqusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const DisqusIcon: FC<IDisqusIconProps> = memo(props => {
  return <DisqusSvg {...props} />;
});
