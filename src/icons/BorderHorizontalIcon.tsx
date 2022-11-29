import React, { FC, memo } from 'react';
import BorderHorizontalSvg from '../svg/border-horizontal.svg';

export interface IBorderHorizontalIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BorderHorizontalIcon: FC<IBorderHorizontalIconProps> = memo(props => {
  return <BorderHorizontalSvg {...props} />;
});
