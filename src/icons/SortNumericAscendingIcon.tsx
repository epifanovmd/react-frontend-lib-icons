import React, { FC, memo } from 'react';
import SortNumericAscendingSvg from '../svg/sort-numeric-ascending.svg';

export interface ISortNumericAscendingIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SortNumericAscendingIcon: FC<ISortNumericAscendingIconProps> = memo(props => {
  return <SortNumericAscendingSvg {...props} />;
});
