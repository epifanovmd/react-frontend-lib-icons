import React, { FC, memo } from 'react';
import SelectRemoveSvg from '../svg/select-remove.svg';

export interface ISelectRemoveIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SelectRemoveIcon: FC<ISelectRemoveIconProps> = memo(props => {
  return <SelectRemoveSvg {...props} />;
});
