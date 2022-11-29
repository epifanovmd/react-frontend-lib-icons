import React, { FC, memo } from 'react';
import SelectArrowDownSvg from '../svg/select-arrow-down.svg';

export interface ISelectArrowDownIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SelectArrowDownIcon: FC<ISelectArrowDownIconProps> = memo(props => {
  return <SelectArrowDownSvg {...props} />;
});
