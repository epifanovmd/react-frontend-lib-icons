import React, { FC, memo } from 'react';
import PageLastSvg from '../svg/page-last.svg';

export interface IPageLastIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PageLastIcon: FC<IPageLastIconProps> = memo(props => {
  return <PageLastSvg {...props} />;
});
