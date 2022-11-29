import React, { FC, memo } from 'react';
import CachedSvg from '../svg/cached.svg';

export interface ICachedIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CachedIcon: FC<ICachedIconProps> = memo(props => {
  return <CachedSvg {...props} />;
});
