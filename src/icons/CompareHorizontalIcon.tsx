import React, { FC, memo } from 'react';
import CompareHorizontalSvg from '../svg/compare-horizontal.svg';

export interface ICompareHorizontalIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CompareHorizontalIcon: FC<ICompareHorizontalIconProps> = memo(props => {
  return <CompareHorizontalSvg {...props} />;
});
