import React, { FC, memo } from 'react';
import SelectGroupSvg from '../svg/select-group.svg';

export interface ISelectGroupIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SelectGroupIcon: FC<ISelectGroupIconProps> = memo(props => {
  return <SelectGroupSvg {...props} />;
});
