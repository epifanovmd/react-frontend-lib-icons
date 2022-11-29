import React, { FC, memo } from 'react';
import SelectArrowUpSvg from '../svg/select-arrow-up.svg';

export interface ISelectArrowUpIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SelectArrowUpIcon: FC<ISelectArrowUpIconProps> = memo(props => {
  return <SelectArrowUpSvg {...props} />;
});
