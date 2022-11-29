import React, { FC, memo } from 'react';
import UnfoldMoreVerticalSvg from '../svg/unfold-more-vertical.svg';

export interface IUnfoldMoreVerticalIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const UnfoldMoreVerticalIcon: FC<IUnfoldMoreVerticalIconProps> = memo(props => {
  return <UnfoldMoreVerticalSvg {...props} />;
});
