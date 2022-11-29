import React, { FC, memo } from 'react';
import CompareSvg from '../svg/compare.svg';

export interface ICompareIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CompareIcon: FC<ICompareIconProps> = memo(props => {
  return <CompareSvg {...props} />;
});
