import React, { FC, memo } from 'react';
import CompareRemoveSvg from '../svg/compare-remove.svg';

export interface ICompareRemoveIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CompareRemoveIcon: FC<ICompareRemoveIconProps> = memo(props => {
  return <CompareRemoveSvg {...props} />;
});
