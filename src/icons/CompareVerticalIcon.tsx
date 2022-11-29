import React, { FC, memo } from 'react';
import CompareVerticalSvg from '../svg/compare-vertical.svg';

export interface ICompareVerticalIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CompareVerticalIcon: FC<ICompareVerticalIconProps> = memo(props => {
  return <CompareVerticalSvg {...props} />;
});
