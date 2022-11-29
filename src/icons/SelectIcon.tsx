import React, { FC, memo } from 'react';
import SelectSvg from '../svg/select.svg';

export interface ISelectIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SelectIcon: FC<ISelectIconProps> = memo(props => {
  return <SelectSvg {...props} />;
});
