import React, { FC, memo } from 'react';
import SelectCompareSvg from '../svg/select-compare.svg';

export interface ISelectCompareIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SelectCompareIcon: FC<ISelectCompareIconProps> = memo(props => {
  return <SelectCompareSvg {...props} />;
});
