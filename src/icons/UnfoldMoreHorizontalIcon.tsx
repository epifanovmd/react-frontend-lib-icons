import React, { FC, memo } from 'react';
import UnfoldMoreHorizontalSvg from '../svg/unfold-more-horizontal.svg';

export interface IUnfoldMoreHorizontalIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const UnfoldMoreHorizontalIcon: FC<IUnfoldMoreHorizontalIconProps> = memo(props => {
  return <UnfoldMoreHorizontalSvg {...props} />;
});
