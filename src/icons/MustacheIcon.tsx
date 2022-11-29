import React, { FC, memo } from 'react';
import MustacheSvg from '../svg/mustache.svg';

export interface IMustacheIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MustacheIcon: FC<IMustacheIconProps> = memo(props => {
  return <MustacheSvg {...props} />;
});
