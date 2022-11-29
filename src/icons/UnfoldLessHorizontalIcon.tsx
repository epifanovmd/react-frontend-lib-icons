import React, { FC, memo } from 'react';
import UnfoldLessHorizontalSvg from '../svg/unfold-less-horizontal.svg';

export interface IUnfoldLessHorizontalIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const UnfoldLessHorizontalIcon: FC<IUnfoldLessHorizontalIconProps> = memo(props => {
  return <UnfoldLessHorizontalSvg {...props} />;
});
