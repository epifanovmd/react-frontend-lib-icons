import React, { FC, memo } from 'react';
import SelectAllSvg from '../svg/select-all.svg';

export interface ISelectAllIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SelectAllIcon: FC<ISelectAllIconProps> = memo(props => {
  return <SelectAllSvg {...props} />;
});
