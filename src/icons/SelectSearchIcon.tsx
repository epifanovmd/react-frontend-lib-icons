import React, { FC, memo } from 'react';
import SelectSearchSvg from '../svg/select-search.svg';

export interface ISelectSearchIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SelectSearchIcon: FC<ISelectSearchIconProps> = memo(props => {
  return <SelectSearchSvg {...props} />;
});
