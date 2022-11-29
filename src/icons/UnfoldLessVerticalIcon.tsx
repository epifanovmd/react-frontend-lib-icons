import React, { FC, memo } from 'react';
import UnfoldLessVerticalSvg from '../svg/unfold-less-vertical.svg';

export interface IUnfoldLessVerticalIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const UnfoldLessVerticalIcon: FC<IUnfoldLessVerticalIconProps> = memo(props => {
  return <UnfoldLessVerticalSvg {...props} />;
});
