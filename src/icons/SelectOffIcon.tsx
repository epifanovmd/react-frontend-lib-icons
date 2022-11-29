import React, { FC, memo } from 'react';
import SelectOffSvg from '../svg/select-off.svg';

export interface ISelectOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SelectOffIcon: FC<ISelectOffIconProps> = memo(props => {
  return <SelectOffSvg {...props} />;
});
