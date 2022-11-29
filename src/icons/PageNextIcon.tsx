import React, { FC, memo } from 'react';
import PageNextSvg from '../svg/page-next.svg';

export interface IPageNextIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PageNextIcon: FC<IPageNextIconProps> = memo(props => {
  return <PageNextSvg {...props} />;
});
