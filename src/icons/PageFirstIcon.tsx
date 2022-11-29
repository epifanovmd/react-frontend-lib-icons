import React, { FC, memo } from 'react';
import PageFirstSvg from '../svg/page-first.svg';

export interface IPageFirstIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PageFirstIcon: FC<IPageFirstIconProps> = memo(props => {
  return <PageFirstSvg {...props} />;
});
