import React, { FC, memo } from 'react';
import PagePreviousSvg from '../svg/page-previous.svg';

export interface IPagePreviousIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PagePreviousIcon: FC<IPagePreviousIconProps> = memo(props => {
  return <PagePreviousSvg {...props} />;
});
